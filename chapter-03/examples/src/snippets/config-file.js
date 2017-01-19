'use strict';

const NODE_ENV = process.env.NODE_ENV || 'production';

const getConfigFromFile = (env) => require(`./config/${env || NODE_ENV}.json`);

getConfigFromFile();
getConfigFromFile('dev');
