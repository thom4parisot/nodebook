const {format} = require('url');

const url = 'https://user:password@thom4.net/#top?test=1';
const example = new URL(url);
const options = {
  auth: false,
  search: false,
  fragment: false,
};

console.log(format(example, options));  // <1>
