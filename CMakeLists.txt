cmake_minimum_required(VERSION 3.0.2 FATAL_ERROR)

project(lxqt-sudo)

option(UPDATE_TRANSLATIONS "Update source translation translations/*.ts files" OFF)

set(CMAKE_INCLUDE_CURRENT_DIR ON)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTOUIC ON)

include(CheckCXXCompilerFlag)
CHECK_CXX_COMPILER_FLAG("-std=c++11" COMPILER_SUPPORTS_CXX11)
CHECK_CXX_COMPILER_FLAG("-std=c++0x" COMPILER_SUPPORTS_CXX0X)
if(COMPILER_SUPPORTS_CXX11)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")
elseif(COMPILER_SUPPORTS_CXX0X)
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++0x")
else()
    message(FATAL "The compiler ${CMAKE_CXX_COMPILER} has no C++11 support. C++11 support is required")
endif()

find_package(Qt5Widgets REQUIRED QUIET)
find_package(lxqt REQUIRED QUIET)

include(LXQtTranslate)

add_definitions("-DLXQTSUDO_INSTALL_DIR=\"${CMAKE_INSTALL_PREFIX}/bin\""
    "-DLXQTSUDO_SUDO=\"sudo\""
    "-DLXQTSUDO=\"lxqt-sudo\""
    "-DLXQT_VERSION=\"${LXQT_VERSION}\""
    )

set ( HDRS
    passworddialog.h
)

set ( SRCS
    passworddialog.cpp
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
    lxqt
)

install(TARGETS lxqt-sudo RUNTIME DESTINATION bin)
install(FILES ${DESKTOP_FILES} DESTINATION "${CMAKE_INSTALL_PREFIX}/share/applications")
install(FILES man/lxqt-sudo.1 DESTINATION "${CMAKE_INSTALL_PREFIX}/share/man/man1")
