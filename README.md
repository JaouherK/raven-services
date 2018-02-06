# raven-services

## install
npm install pm2 -g
pm2 start ecosystem.config.js --watch --env development
pm2 kill
pm2 list
pm2 show 2
pm2 monitor service2-php
