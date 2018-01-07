'use strict';

const pkg = require('./package.json');

module.exports = () => `Bienvenue dans le module ${pkg.name} !`;
