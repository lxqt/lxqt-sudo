cmake_minimum_required(VERSION 3.0.2 FATAL_ERROR)

project(lxqt-sudo)

include(GNUInstallDirs)

set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTOUIC ON)
set(CMAKE_INCLUDE_CURRENT_DIR ON)

option(UPDATE_TRANSLATIONS "Update source translation translations/*.ts files" OFF)
option(PULL_TRANSLATIONS "Pull translations" ON)

find_package(Qt5Widgets REQUIRED)
message(STATUS "Building with Qt${Qt5Core_VERSION}")

find_package(lxqt REQUIRED)

include(LXQtCompilerSettings NO_POLICY_SCOPE)

set ( LINK_LXSU "lxsu")
set ( LINK_LXSUDO "lxsudo")

set ( HDRS
    passworddialog.h
)

set ( SRCS
    passworddialog.cpp
    sudo.cpp
    main.cpp
)

set ( MOCS
    passworddialog.h
)

set( UIS
    passworddialog.ui
)

if(NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif()

# Translations **********************************
include(LXQtTranslate)

lxqt_translate_ts(QM_FILES
    UPDATE_TRANSLATIONS
        ${UPDATE_TRANSLATIONS}
    SOURCES
        ${HDRS}
        ${SRCS}
        ${UIS}
    INSTALL_DIR
        "${LXQT_TRANSLATIONS_DIR}/${PROJECT_NAME}"
    PULL_TRANSLATIONS
        ${PULL_TRANSLATIONS}
    CLEAN_TRANSLATIONS
        ${CLEAN_TRANSLATIONS}
    TRANSLATIONS_REPO
        ${TRANSLATIONS_REPO}
    TRANSLATIONS_REFSPEC
        ${TRANSLATIONS_REFSPEC}
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
    PRIVATE "LXQTSUDO_LXSU=\"${LINK_LXSU}\""
    PRIVATE "LXQTSUDO_LXSUDO=\"${LINK_LXSUDO}\""
    PRIVATE "LXQT_VERSION=\"${LXQT_VERSION}\""
)

add_custom_command(TARGET lxqt-sudo POST_BUILD
    COMMAND ln -f -s lxqt-sudo "${LINK_LXSU}"
    WORKING_DIRECTORY .
    COMMENT "Creating ${LINK_LXSU} symlink"
)

add_custom_command(TARGET lxqt-sudo POST_BUILD
    COMMAND ln -f -s lxqt-sudo "${LINK_LXSUDO}"
    WORKING_DIRECTORY .
    COMMENT "Creating ${LINK_LXSUDO} symlink"
)

install(TARGETS
    lxqt-sudo
    RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}"
    COMPONENT Runtime
)
install(FILES
    "${CMAKE_CURRENT_BINARY_DIR}/${LINK_LXSU}" "${CMAKE_CURRENT_BINARY_DIR}/${LINK_LXSUDO}"
    DESTINATION "${CMAKE_INSTALL_BINDIR}"
    COMPONENT Runtime
)
install(FILES
    ${DESKTOP_FILES}
    DESTINATION "${CMAKE_INSTALL_DATAROOTDIR}/applications"
    COMPONENT Runtime
)
install(FILES
    man/lxqt-sudo.1 "man/${LINK_LXSU}.1" "man/${LINK_LXSUDO}.1"
    DESTINATION "${CMAKE_INSTALL_MANDIR}/man1"
    COMPONENT Runtime
)
