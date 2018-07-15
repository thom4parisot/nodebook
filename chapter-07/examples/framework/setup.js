'use strict';

const app = require('express')();                 // <1>

app.get('/', (request, response) => {             // <2>
  response.send('<a href="/login">connexion</a>');// <3>
});

app.get('/login', (request, response) => {
  response.send('<p>En travaux</p>');
});

app.listen(4000);                                 // <4>
