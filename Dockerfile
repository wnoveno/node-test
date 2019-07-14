FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install nodemon -g
COPY . .

CMD [ "npm", "start" ]