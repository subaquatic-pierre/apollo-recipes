#! /bin/bash

source .env

echo $CLIENT_HOST

serve -s build -p $CLIENT_PORT