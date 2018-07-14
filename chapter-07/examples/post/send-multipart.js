'use strict';

const {post} = require('superagent')

post('http://localhost:4000')
  .field('fromage', 'cabécou')                // <1>
  .field('remember_me', 1)
  .catch(error => console.log(error.message));
