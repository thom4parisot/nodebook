'use strict';

var messageAbbr = require('./message-abbr-promisified');
var fs = require('fs');
var timeStart = process.hrtime();

var messagePromise = messageAbbr('good morning england!');

module.exports = messagePromise
  .catch(logErr)
  .then(logData)
  .then(storeData.bind(null, '/dev/null'))
  .then(function(){
    logPerformance('messageAbbr', process.hrtime(timeStart));
  });

function logErr(err){
  console.error(err);
}

function logData(data){
  console.log(data);
}

function logPerformance(functioName, timeDiff){
  var duration = timeDiff[0] + (timeDiff[1] / 1e9);
  console.log('[%s] executed in %ss.', functioName, duration);
}

function storeData(filename, data){
  fs.writeFile(filename, data, { encoding: 'utf-8' }, function(err){
    if (err) return logErr(err);

    console.log('Data written to %s.', filename);
  });
}