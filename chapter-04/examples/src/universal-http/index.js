'use strict';

if (typeof require === 'function') {      // <1>
  var superagent = require('superagent');
}

superagent
  .get('http://localhost:4000/src/universal-http/sample.json')
  .end((err, response) => {
    if (err) {
      throw err;
    }

    console.log(response.body.cheeses);   // <2>
  });
