FROM nginx:1.21.3

COPY ./dist/app-web /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf