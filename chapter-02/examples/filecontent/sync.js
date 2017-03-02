'use strict';

/* eslint-disable no-sync */

const fs = require('fs');

const getFilecontent = (filename) => {
  try {
    const fileBuffer = fs.readFileSync(filename);
    return String(fileBuffer);
  }
  catch (e){
    return e;
  }
};

module.exports = getFilecontent;
