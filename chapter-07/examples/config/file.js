'use strict';

const NODE_ENV = process.env.NODE_ENV || 'production';

// eslint-disable-next-line global-require
const getConfigFromFile = (env) => require(`./config/${env || NODE_ENV}.json`);

getConfigFromFile();
getConfigFromFile('dev');
