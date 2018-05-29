const {format} = require('url');

const example = new URL('https://user:password@oncletom.io/#top?test=1');
const options = {
  auth: false,
  search: false,
  fragment: false,
};

console.log(format(example, options));  // <1>
