'use strict';

const express = require('express');
const helmet = require('helmet');
const {join} = require('path');

const app = express();
const filepath = join(__dirname, '..', 'static', 'files');

app.use('/files', express.static(filepath));          // <1>
app.use(helmet());                                    // <2>

app.get('/', (request, response) => {
  response.send('<img src="/files/screenshot.jpg">'); // <3>
});

app.listen(4000);
