'use strict';

var NODE_ENV = process.env.NODE_ENV || 'production';

function getConfigFromFile(env) {
  return require('./config/' + (env || NODE_ENV) + '.json');
}

getConfigFromFile();
getConfigFromFile('dev');