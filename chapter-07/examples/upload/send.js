'use strict';

const {post} = require('superagent')
const {readFile} = require('fs').promises;
const {join} = require('path');
const filepath = join(__dirname, 'hello.txt');

readFile(filepath)
  .then(data => {
    return post('http://localhost:4000')
      .attach('hello', data, 'hello.txt')       // <1>
  })
  .catch(error => console.log(error.message));
