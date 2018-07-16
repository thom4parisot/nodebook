'use strict';

const express = require('express');
const app = express();
const minify = require('express-minify');
const {join} = require('path');

express.static.mime.define({ 'text/x-scss': ['scss'] });// <1>

app.use(minify());                                      // <2>
app.use('/static', express.static(join(__dirname, 'assets')));

app.get('/', (request, response) => {
  response.write(
    '<link rel="stylesheet" href="/static/main.scss">'  // <3>
  );
  response.end('<p>Coucou !</p>');
});

app.listen(4000);
