'use strict';

const app = require('express')();
const njk = require('nunjucks').configure(__dirname);   // <1>
njk.express(app);                                       // <2>

app.get('/', (request, response) => {
  response.render('index.njk', { message: 'Coucou !' });// <3>
});

app.listen(4000);
