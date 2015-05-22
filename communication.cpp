/* BEGIN_COMMON_COPYRIGHT_HEADER
 * (c)LGPL2+
 *
 * LXQt - a lightweight, Qt based, desktop toolset
 * http://lxqt.org
 *
 * Copyright: 2015 LXQt team
 * Authors:
 *   Palo Kisa <palo.kisa@gmail.com>
 *
 * This program or library is free software; you can redistribute it
 * and/or modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General
 * Public License along with this library; if not, write to the
 * Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA 02110-1301 USA
 *
 * END_COMMON_COPYRIGHT_HEADER */

#include "communication.h"

#include <QSharedMemory>
#include <QTimer>
#include <QDebug>

class Communication::Impl
{
public:
    enum data_t
    {
        DATA_NEW = 0
            , DATA_READY
            , DATA_NEEDED
    };
    QScopedPointer<QSharedMemory> memory;
    bool valid;
    bool master;
    QScopedPointer<QTimer> timer;

    static const int MEM_SIZE = 1024;
    static const int SPINLOCK_DELAY = 250;
};

namespace
{
    class Locker
    {
    public:
        Locker(QSharedMemory& mem)
            : mMem(mem)
        {
            //TODO: error handling!?!
            mMem.lock();
        }
        ~Locker()
        {
            mMem.unlock();
        }
    private:
        QSharedMemory & mMem;
    };
}
Communication::Communication(QString const & key, bool master, QObject * parent/* = nullptr*/)
    : QObject(parent)
    , mImpl(new Impl)
{
    mImpl->master = master;
    mImpl->memory.reset(new QSharedMemory{key});
    mImpl->valid =
        mImpl->master
        ? mImpl->memory->create(Impl::MEM_SIZE, QSharedMemory::ReadWrite)
        : mImpl->memory->attach(QSharedMemory::ReadWrite);

    if (!mImpl->valid)
    {
        qCritical() << tr("%1: Communication - unable to create shared memory(%2B), ").arg(LXQTSUDO).arg(Impl::MEM_SIZE)
            << mImpl->memory->errorString();
        return;
    }

    if (mImpl->master)
    {
        Locker guard(*mImpl->memory);
        uint8_t * data = static_cast<uint8_t *>(mImpl->memory->data());
        *data = Impl::DATA_NEW;
    }

    mImpl->timer.reset(new QTimer);

    connect(mImpl->timer.data(), &QTimer::timeout, this, &Communication::timeout);
}

Communication::~Communication()
{
}

bool Communication::valid() const
{
    return mImpl->valid;
}

void Communication::waitForReady()
{
    mImpl->timer->start(Impl::SPINLOCK_DELAY);
}

void Communication::timeout()
{
    Locker guard(*mImpl->memory);
    uint8_t * data = static_cast<uint8_t *>(mImpl->memory->data());
    Impl::data_t flag = static_cast<Impl::data_t>(*data);
    if (mImpl->master)
    {
        switch (flag)
        {
            case Impl::DATA_NEW:
            case Impl::DATA_READY:
                mImpl->timer->start(Impl::SPINLOCK_DELAY);
                break;
            case Impl::DATA_NEEDED:
                *data = Impl::DATA_NEW;
                emit passwordNeeded();
                break;
        }
    } else
    {
        //slave
        switch (flag)
        {
            case Impl::DATA_NEW:
            case Impl::DATA_NEEDED:
                mImpl->timer->start(Impl::SPINLOCK_DELAY);
                break;
            case Impl::DATA_READY:
                char const * const password = reinterpret_cast<char const * const>(data + 1);
                std::string pwd{password, strlen(password)};

                *data = Impl::DATA_NEW;

                emit passwordReady(QString::fromStdString(std::move(pwd)));
                break;
        }
    }
}

//for master
void Communication::setPassword(QString passwd)
{
    Q_ASSERT(mImpl->master);
    Locker guard{*mImpl->memory};

    uint8_t * data = static_cast<uint8_t *>(mImpl->memory->data());

    Impl::data_t flag = static_cast<Impl::data_t>(*data);
    Q_ASSERT(Impl::DATA_NEW == flag);

    *data = Impl::DATA_READY;
    std::string passwd_s{passwd.toStdString()};
    if (passwd_s.size() > Impl::MEM_SIZE - 2)
        qCritical() << tr("%1: Communication - password is too long(%2) for aquired shared memory(%3), has to by cut-off...")
            .arg(LXQTSUDO).arg(passwd_s.size()).arg(Impl::MEM_SIZE - 2);
    snprintf(reinterpret_cast<char *>(data + 1), Impl::MEM_SIZE - 1, "%s", passwd.toStdString().c_str());
    //to be sure there is a nul byte
    data[Impl::MEM_SIZE - 1] = 0;
}

//for slave
void Communication::needPassword()
{
    Q_ASSERT(!mImpl->master);
    Locker guard{*mImpl->memory};

    uint8_t * data = static_cast<uint8_t *>(mImpl->memory->data());

    Impl::data_t flag = static_cast<Impl::data_t>(*data);
    Q_ASSERT(Impl::DATA_NEW == flag);

    *data = Impl::DATA_NEEDED;
}
