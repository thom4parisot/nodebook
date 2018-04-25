'use strict';

const restify = require('restify');
const server = restify.createServer();
const countries = require('i18n-iso-countries');

const codes = countries.getNames('en');

const validate = (request, response, next) => {
  return (request.params.code in codes)
    ? next()
    : next(new restify.errors.NotFoundError('Country not found'));
};

const responseV1 = (request, response, next) => {
  response.send(200, codes[request.params.code]);

  next();
};

server.use(restify.CORS());
server.get({ path: '/countries/:code', version: '1.0.0' }, validate, responseV1);

server.listen(8080, () => console.log('Serveur accessible sur %s', server.url));
