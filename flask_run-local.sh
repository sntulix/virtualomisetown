#/bin/sh

export FLASK_RUN_HOST=localhost
export FLASK_RUN_PORT=5001

flask run -h $FLASK_RUN_HOST -p $FLASK_RUN_PORT \
--reload \
--extra-files templates/base.html \
--debugger
#--cert server.crt --key server-nopassword.key
