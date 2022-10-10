FROM node:16-alpine
ENV NODE_ENV=development
RUN mkdir /app
COPY ./package.json app
RUN npm i --prefix /app
WORKDIR /app
COPY . .
EXPOSE 3000
CMD npm start