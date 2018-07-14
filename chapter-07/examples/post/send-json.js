'use strict';

const {post} = require('superagent');

post('http://localhost:4000')
  .send({                         // <1>
    fromage: 'cabécou',
    remember_me: 1
  })
  .catch(error => console.log(error.message));
