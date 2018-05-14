const https = require('https');
const {parse} = require('url');
const url = parse('https://oncletom.io/node.js/package.json');

const request = https.request({ ...url, method: 'HEAD'});
request.setHeader('Accept', 'application/json');           
request.end();                                             

request.on('response', (response) => {
  const lastModified = response.headers['last-modified'];

  console.log('Dernière modification : %s', lastModified); 
});
