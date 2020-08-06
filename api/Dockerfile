FROM node:14.5.0-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN chmod +x /wait

RUN npm install pm2 -g

RUN mkdir /home/node/api

WORKDIR /home/node/api

COPY package.json ./

RUN npm install

COPY . /home/node/api

EXPOSE 8080
CMD /wait && pm2-dev ecosystem.config.js
