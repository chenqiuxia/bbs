FROM nginx

EXPOSE 80

ADD ./dist usr/share/nginx/html

ADD nginx.conf etc/nginx/nginx.conf


#
## Install Google Chrome
## RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
#RUN apt-get update && apt-get install -y --allow-unauthenticated google-chrome-stable


# RUN npm rebuild node-sass --force
