#!/bin/bash

set -e

PROJECT_DIR="/var/www/html/personal-blog/frontend"

# make dir if not exists (first deploy)
mkdir -p $PROJECT_DIR

cd $PROJECT_DIR

git config --global --add safe.directory $PROJECT_DIR

# the project has not been cloned yet (first deploy)
if [ ! -d $PROJECT_DIR"/.git" ]; then
  GIT_SSH_COMMAND='ssh -i /home/stanko/.ssh/id_rsa -o IdentitiesOnly=yes' git clone https://github.com/Stanko172/personal-blog-frontend.git .
else
  GIT_SSH_COMMAND='ssh -i /home/stanko/.ssh/id_rsa -o IdentitiesOnly=yes' git pull
fi

npm install
npm run build
