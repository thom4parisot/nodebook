'use strict';

const messageAbbr = require('../message-abbr');
const fs = require('fs');
const timeStart = process.hrtime();

const logErr = (err) => console.error(err);
const logData = (data) => console.log(data);

const logPerformance = (functionName, timeDiff) => {
  const duration = timeDiff[0] + (timeDiff[1] / 1e9);
  console.log('[%s] executed in %ss.', functionName, duration);
}

const storeData = (filename, data) => {
  fs.writeFile(filename, data, { encoding: 'utf-8' }, (err) => {
    if (err) {
      return logErr(err);
    }

    console.log('Data written to %s.', filename);
  });
}

messageAbbr('good morning england!', (err, abbr) => {
  if (err) {
    logErr(err);
  }

  logData(abbr);
  logPerformance('messageAbbr', process.hrtime(timeStart));
  storeData('/dev/null', abbr);
});
