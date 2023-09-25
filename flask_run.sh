#/bin/sh

export FLASK_RUN_HOST=shoutengai.futuregadget.com
export FLASK_RUN_PORT=80

flask run -h $FLASK_RUN_HOST -p $FLASK_RUN_PORT \
--reload \
--extra-files templates/base.html
--debugger \
#--cert server.crt --key server-nopassword.key
