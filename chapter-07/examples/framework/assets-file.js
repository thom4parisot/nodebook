'use strict';

const express = require('express');
const app = express();
const {join} = require('path');

const files_dir = join(__dirname, '..', 'static', 'files');
const image_path = join(files_dir, 'screenshot.jpg');

app.use('/wikipedia.jpg', express.static(image_path));  // <1>

app.get('/', (request, response) => {
  response.write('<img src="/wikipedia.jpg">');         // <2>
  response.end();
});

app.listen(4000);
