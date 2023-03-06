#! /bin/bash

source .env

echo $CLIENT_HOST

node_modules/.bin/serve -s build -p $CLIENT_PORT