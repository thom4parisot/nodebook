'use strict';

const express = require('express');
const app = express();
const {join} = require('path');

const files_dir = join(__dirname, '..', 'static', 'files');

app.use('/static', express.static(files_dir));          // <1>

app.get('/', (request, response) => {
  response.write('<img src="/static/screenshot.jpg">'); // <2>
  response.end();
});

app.listen(4000);
