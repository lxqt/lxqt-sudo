cmake_minimum_required(VERSION 2.8.11)

project(lxqt-sudo)

option(UPDATE_TRANSLATIONS "Update source translation translations/*.ts files" OFF)

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

include(${LXQT_USE_FILE})
include(LXQtTranslate)

include_directories (
    ${CMAKE_CURRENT_BINARY_DIR}
    ${LXQT_INCLUDE_DIRS}
)

add_definitions("-DLXQTSUDO_INSTALL_DIR=\"${CMAKE_INSTALL_PREFIX}/bin\""
    "-DLXQTSUDO_SUDO=\"sudo\""
    "-DLXQTSUDO=\"lxqt-sudo\""
    "-DLXQTSUDO_HELPER=\"lxqt-sudo-helper\""
    )

set ( HDRS
    communication.h
    passworddialog.h
)

set ( SRCS
    communication.cpp
    passworddialog.cpp
    main.cpp
)

set ( MOCS
    communication.h
    passworddialog.h
)

set( UIS
    passworddialog.ui
)

qt5_wrap_cpp(MOC_OBJECTS ${MOCS})
qt5_wrap_ui(UI_HEADERS ${UIS})

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

lxqt_translate_desktop(DESKTOP_FILES
    SOURCES
    lxqt-sudo.desktop.in
)

lxqt_app_translation_loader(SRCS ${PROJECT_NAME})
#************************************************

add_executable(lxqt-sudo
    ${SRCS}
    ${UI_HEADERS}
    ${MOC_OBJECTS}
    ${DESKTOP_FILES}
    ${QM_FILES}
)
add_executable(lxqt-sudo-helper IMPORTED)

target_link_libraries(lxqt-sudo
    Qt5::Widgets
    ${LXQT_LIBRARIES}
)

add_custom_command(TARGET lxqt-sudo POST_BUILD
    COMMAND ln -f -s lxqt-sudo lxqt-sudo-helper
    WORKING_DIRECTORY .
    COMMENT "Creating lxqt-sudo-helper symlink")

install(TARGETS lxqt-sudo RUNTIME DESTINATION bin)
install(FILES "${CMAKE_CURRENT_BINARY_DIR}/lxqt-sudo-helper" DESTINATION "${CMAKE_INSTALL_PREFIX}/bin")
install(FILES ${DESKTOP_FILES} DESTINATION "${CMAKE_INSTALL_PREFIX}/share/applications")
install(FILES man/lxqt-sudo.1 DESTINATION "${CMAKE_INSTALL_PREFIX}/share/man/man1")
