'use strict';

const restify = require('restify');
const server = restify.createServer();
const { dependencies } = require('../../package.json');

const validate = (req, res, next) => {
  if (!(req.params.name in dependencies)){
    return next(restify.ResourceNotFoundError('Module not found'));
  }

  next();
};

const responseV1 = (req, res, next) => {
  res.send(200, dependencies[req.params.name]);

  next();
};

const responseV2 = (req, res, next) => {
  res.send(200, {
    modules: [{
      name: req.params.name,
      version: dependencies[req.params.name].slice(1)
    }]
  });

  next();
};

server.use(restify.CORS());
server.get({ path: '/modules/:name', version: '1.0.0' }, validate, responseV1);
server.get({ path: '/modules/:name', version: '2.0.0' }, validate, responseV2);

server.listen(8080, () => console.log('Serveur accessible sur %s', server.url));
