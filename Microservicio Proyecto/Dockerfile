FROM node:20.11.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD ["node","server.js"]


