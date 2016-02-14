#!/bin/sh
APP_NAME=$1;
LTI_KEY=$APP_NAME;
LTI_SECRET=$(uuidgen);

curl -X PUT -u "Capira:lznR10hXA7" -d "appname=$APP_NAME&key=mongodb&value=mongodb://Capira:bKvad4MDmc@mongodb.cloudno.de:27017/$APP_NAME" https://api.cloudno.de/env
curl -X PUT -u "Capira:lznR10hXA7" -d "appname=$APP_NAME&key=lti_key&value=$LTI_KEY" https://api.cloudno.de/env
curl -X PUT -u "Capira:lznR10hXA7" -d "appname=$APP_NAME&key=lti_secret&value=$LTI_SECRET" https://api.cloudno.de/env
curl -X PUT -u "Capira:lznR10hXA7" -d "appname=$APP_NAME&running=true" https://api.cloudno.de/app
curl -X PUT -u "Capira:lznR10hXA7" -d "appname=$APP_NAME&running=false" https://api.cloudno.de/app
echo "\n\nLTI-Secret: $LTI_SECRET"