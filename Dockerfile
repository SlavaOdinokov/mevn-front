FROM node:14

WORKDIR /usr/src/front

COPY package.json /usr/src/front

RUN npm install

ENV VUE_PORT=3002
ENV VUE_APP_API_URL=localhost:3001/api/v1

EXPOSE 3002
CMD npm run serve
