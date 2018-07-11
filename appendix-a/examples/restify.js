'use strict';

const restify = require('restify');
const {NotFoundError} = require('restify-errors');
const server = restify.createServer();
const countries = require('i18n-iso-countries');

const responseV1 = (request, response, next) => {
  const codes = countries.getNames('en');

  if (codes[request.params.code] === undefined) {
    return next(new NotFoundError('Country not found'));
  }

  response.send(200, codes[request.params.code]);

  next();
};

server.get({ path: '/:code', version: '1.0.0' }, responseV1);
server.listen(8080, () => {
  console.log('Serveur accessible sur %s', server.url);
});
