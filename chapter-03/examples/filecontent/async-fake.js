'use strict';

/* eslint-disable no-sync */

const fs = require('fs');

const getFilecontent = (filename, onSuccess, onError) => { // <1>
  try {
    const fileBuffer = fs.readFileSync(filename);          // <2>
    onSuccess(String(fileBuffer));
  }
  catch (e){
    onError(e);
  }
};

module.exports = getFilecontent;
