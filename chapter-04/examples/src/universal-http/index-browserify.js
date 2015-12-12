'use strict';

const request = require('superagent');

request
  .get('http://localhost:4000/src/universal-http/sample.json')
  .end((err, response) => {
    if (err) {
      throw err;
    }

    console.log(response.body.cheeses);
  });
