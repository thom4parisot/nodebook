'use strict';

var messageAbbr = require('./message-abbr-evented');
var fs = require('fs');
var timeStart = process.hrtime();

var event = messageAbbr('good morning england!');
event.on('error', logErr);
event.on('data', logData);
event.on('data', storeData.bind(null, '/dev/null'));
event.on('data', function(){
  logPerformance('messageAbbr', process.hrtime(timeStart));
});

module.exports = event; // <1>

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