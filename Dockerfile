FROM node:16-alpine
RUN mkdir /app
COPY ./package.json app
RUN npm i --prefix /app
WORKDIR /app
COPY . .
EXPOSE 3000
CMD npm start