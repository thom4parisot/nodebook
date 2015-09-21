'use strict';

var messageAbbr = require('./message-abbr');
var fs = require('fs');
var timeStart = process.hrtime();

messageAbbr('good morning england!', function(err, abbr){
  if (err) {
    logErr(err);
  }

  logData(abbr);
  logPerformance('messageAbbr', process.hrtime(timeStart));
  storeData('/dev/null', abbr);
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