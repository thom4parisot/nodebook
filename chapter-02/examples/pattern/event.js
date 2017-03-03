'use strict';

const messageAbbr = require('../message-abbr/evented');
const { writeFile } = require('fs');
const timeStart = process.hrtime();

const logErr = (err) => console.error(err);
const logData = (data) => console.log(data);

const logPerformance = (functionName, timeDiff) => {
  const duration = timeDiff[0] + (timeDiff[1] / 1e9);
  console.log('[%s] executed in %ss.', functionName, duration);
}

const storeData = (filename, data) => {
  writeFile(filename, data, { encoding: 'utf-8' }, (err) => {
    if (err) {
      return logErr(err);
    }

    console.log('Data written to %s.', filename);
  });
}

const event = messageAbbr('good morning england!');

event.on('error', logErr);
event.on('data', logData);
event.on('data', (data) => storeData('/dev/null', data));
event.on('data', () => {
  logPerformance('messageAbbr', process.hrtime(timeStart));
});

module.exports = event; // <1>
