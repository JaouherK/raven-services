# raven-services

## install
```
npm install pm2 -g
pm2 start ecosystem.config.js --watch --env development
pm2 list
pm2 show 2
pm2 monit
pm2 monitor service2-php
pm2 kill
```

## additional modules
```
pm2 install pm2-server-monit
pm2 install pm2-php-fpm
pm2 install pm2-webshell
pm2 install pm2-amqp-logstash
pm2 install pm2-rabbitmq
```
