FROM node:14-alpine

WORKDIR /usr/src/app
COPY package*.json ./
EXPOSE 8080
ENV NODE_ENV=dev
RUN npm install -g nodemon && npm install
COPY . .
CMD [ "npm", "run", "start" ]