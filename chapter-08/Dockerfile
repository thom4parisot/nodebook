FROM node:alpine

WORKDIR /nodebook
ADD ./package.json ./package-lock.json ./
RUN npm ci
ADD ./examples ./examples

CMD ["node", "examples/hello.js"]
