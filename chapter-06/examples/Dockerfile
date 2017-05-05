FROM node:6-slim

# On suit les instructions suivantes :
# https://www.phusionpassenger.com/library/walkthroughs/deploy/nodejs/ownserver/nginx/oss/yakkety/install_passenger.html

RUN apt-get update
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
RUN apt-get install -y apt-transport-https ca-certificates
RUN echo deb https://oss-binaries.phusionpassenger.com/apt/passenger jessie main > /etc/apt/sources.list.d/passenger.list
RUN apt-get update

RUN apt-get install -y nginx-extras passenger
RUN sed -i -e 's@# include /etc/nginx/passenger.conf;@include /etc/nginx/passenger.conf;@' /etc/nginx/nginx.conf

RUN adduser --disabled-password --disabled-login --no-create-home --gecos "" webapp-nodebook

COPY ./phusion-passenger/sites-available/ /etc/nginx/sites-available
RUN ln -f -s /etc/nginx/sites-available/webapp-nodebook.conf /etc/nginx/sites-enabled/default

COPY ./app.js /var/www/webapp-nodebook/app.js
COPY ./package.json /var/www/webapp-nodebook/package.json
RUN cd /var/www/webapp-nodebook && npm install --production
RUN chown -R webapp-nodebook: /var/www/webapp-nodebook


EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]
