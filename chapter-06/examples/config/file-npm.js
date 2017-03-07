'use strict';

const {config} = require('../../package.json');
const {npm_package_config_port} = process.env;

console.log(npm_package_config_port);   // <1>
console.log(config.port);               // <2>
