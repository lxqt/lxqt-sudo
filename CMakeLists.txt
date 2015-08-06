cmake_minimum_required(VERSION 3.0.2 FATAL_ERROR)

project(lxqt-sudo)

option(UPDATE_TRANSLATIONS "Update source translation translations/*.ts files" OFF)

set(CMAKE_INCLUDE_CURRENT_DIR ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTOUIC ON)

include(GNUInstallDirs)

find_package(Qt5Widgets REQUIRED QUIET)
find_package(lxqt REQUIRED QUIET)

include(LXQtCompilerSettings NO_POLICY_SCOPE)
include(LXQtTranslate)

set ( HDRS
    passworddialog.h
)

set ( SRCS
    passworddialog.cpp
    sudo.cpp
    su.cpp
    main.cpp
)

set ( MOCS
    passworddialog.h
)

set( UIS
    passworddialog.ui
)


# Translations **********************************
lxqt_translate_ts(QM_FILES
    UPDATE_TRANSLATIONS ${UPDATE_TRANSLATIONS}
    SOURCES
    ${HDRS}
    ${SRCS}
    ${UIS}
    INSTALL_DIR
    "${LXQT_TRANSLATIONS_DIR}/${PROJECT_NAME}"
)

lxqt_app_translation_loader(SRCS ${PROJECT_NAME})
#************************************************

add_executable(lxqt-sudo
    ${SRCS}
    ${DESKTOP_FILES}
    ${QM_FILES}
)

target_link_libraries(lxqt-sudo
    Qt5::Widgets
    util
    lxqt
)

target_compile_definitions(lxqt-sudo
    PRIVATE "LXQTSUDO_SUDO=\"sudo\""
    PRIVATE "LXQTSUDO_SU=\"su\""
    PRIVATE "LXQTSUDO=\"lxqt-sudo\""
    PRIVATE "LXQT_VERSION=\"${LXQT_VERSION}\""
)

install(TARGETS
    lxqt-sudo
    RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
    COMPONENT Runtime
)
install(FILES
    ${DESKTOP_FILES}
    DESTINATION "${CMAKE_INSTALL_DATAROOTDIR}/applications"
    COMPONENT Runtime
)
install(FILES
    man/lxqt-sudo.1
    DESTINATION "${CMAKE_INSTALL_MANDIR}/man1"
    COMPONENT Runtime
)
