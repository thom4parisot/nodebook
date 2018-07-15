'use strict';

const {createServer} = require('http');
const {dependencies} = require('./package.json');
const njk = require('nunjucks').configure(__dirname);   // <1>

const onRequest = (request, response) => {
  const html = njk.render('list.njk', {                 // <2>
    title: 'Liste des dépendances',
    dependencies
  });

  response.end(html);                                   // <3>
};

createServer(onRequest).listen(4000);
