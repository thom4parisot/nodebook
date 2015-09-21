'use strict';

var Promise = require('bluebird');
var _ = require('lodash');
var fs = require('fs');

var readFile = Promise.promisify(fs.readFile);

Promise.all([
    readFile('./package.json'),
    readFile('./src/data/wanted-pkg.json')
  ])
  .map(JSON.parse)
  .spread(function(pkg, wanted){
    return new Promise(function(resolve, reject){
      var missing = _.xor(
        _.keys(pkg.dependencies),
        wanted.packages
      );

      missing.length ? reject(missing) : resolve(wanted.packages);
    });
  })
  .error(function(missingPkgs){
    console.error(missingPkgs); // <1>
  });