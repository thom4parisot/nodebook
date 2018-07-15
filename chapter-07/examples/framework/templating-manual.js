'use strict';

const app = require('express')();
const njk = require('nunjucks');

app.set('views', __dirname);                  // <1>
app.engine('njk', (file, options, next) => {  // <2>
  const html = njk.render(file, options);     // <3>
  next(null, html);                           // <4>
});

app.get('/', (request, response) => {
  response.render('index.njk', { message: 'Coucou !' });
});

app.listen(4000);
