const https = require('https');
const {parse} = require('url');
const url = parse('https://oncletom.io/node.js/package.json');

const request = https.request({ ...url, method: 'HEAD' });      // <1>
request.setHeader('Accept', 'application/json');                // <2>
request.setHeader('Content-Type', 'application/json');
request.end();                                                  // <3>

request.on('response', (response) => {                          // <4>
  const {'last-modified':lastModified} = response.headers;
  console.log('Dernière modification : %s', lastModified);      // <5>

  response.on('data', (data) => console.log(String(data)));     // <6>
});
