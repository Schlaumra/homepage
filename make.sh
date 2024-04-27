#!/bin/bash

if [ "$1" = 'init' ]; then
    git clean -dfX
    git clone -b master --single-branch https://github.com/getgrav/grav.git grav-tmp
    rm -R grav-tmp/user
    rm -R grav-tmp/.gitignore
    rm -Rf grav-tmp/.git
    shopt -s dotglob
    mv grav-tmp/* src
    rmdir grav-tmp
    pnpm install
elif [ "$1" = 'watch' ]; then
    node_modules/gulp/bin/gulp.js watch &
    cd src
    bin/grav server
fi