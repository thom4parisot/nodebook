'use strict';

var restify = require('restify');
var server = restify.createServer();
var dependencies = require('../../package.json').dependencies;

server.use(restify.CORS());

server.get({ path: '/modules/:name', version: '1.0.0' }, validate, responseV1);
server.get({ path: '/modules/:name', version: '2.0.0' }, validate, responseV2);

function validate(req, res, next){
  if (!(req.params.name in dependencies)){
    return next(restify.ResourceNotFoundError('Module not found'));
  }

  next();
}

function responseV1(req, res, next){
  res.send(200, dependencies[req.params.name]);

  next();
}

function responseV2(req, res, next){
  res.send(200, {
    modules: [{
      name: req.params.name,
      version: dependencies[req.params.name].slice(1)
    }]
  });

  next();
}

server.listen(8080, function () {
  console.log('Serveur accessible sur %s', server.url);
});