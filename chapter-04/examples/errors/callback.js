'use strict';

const {readFile} = require('fs');

readFile('je-n-existe-pas.txt', (error, content) => {
  if (error) {                                          // <1>
    console.error(error.message);                       // <2>
    console.error(error);                               // <3>
    return;
  }

  console.log(String(content));
});
