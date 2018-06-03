'use strict';

const {say} = require('cowsay');

module.exports = (request, response) => {
  response.end(say({ text: 'OK !' }));
};
