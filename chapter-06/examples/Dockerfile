FROM node:{v}-alpine

WORKDIR /app

COPY ./app.js ./app.js
COPY ./package.json ./package.json
RUN npm install --production

EXPOSE 4000

CMD ["npm", "start"]
