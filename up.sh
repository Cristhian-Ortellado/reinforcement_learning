#!/bin/bash

echo "Running server \n"

# permissions
chmod +x  up.sh

# env vars
export FLASK_APP="./server/server"

export FLASK_ENV=development

# kill the server if this is running 
lsof -nti:5000 | xargs kill -9

flask run &

npm run dev