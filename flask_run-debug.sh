#!/bin/sh

export FLASK_RUN_HOST=shoutengai.futuregadget.com
export FLASK_RUN_PORT=80

flask run -h $FLASK_RUN_HOST -p $FLASK_RUN_PORT \
#--cert server.crt --key server-nopassword.key \
--debugger \
--reload \
--extra-files templates/base.html
#--extra-files static/js/main.js \
#--extra-files templates/base.html \