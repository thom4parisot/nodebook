'use strict';

const {createServer} = require('http');
const formidable = require('formidable');

const onRequest = (request, response) => {
  const form = new formidable.IncomingForm();
  form.parse(request, (error, fields, files) => { // <1>
    const testFile = files.hello;                 // <2>

    console.log(testFile.type);                   // <3>
    console.log(testFile.name);                   // <4>
    console.log(testFile.size);                   // <5>
    console.log(testFile.path);                   // <6>
    response.end();
  });
};

createServer(onRequest).listen(4000);
