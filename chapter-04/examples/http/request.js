const https = require('https');
const options = {                                 // <1>
  protocol: 'https:',
  host: 'oncletom.io',
  path: '/node.js/package.json',
  method: 'HEAD',
};

const request = https.request(options);
request.setHeader('Accept', 'application/json');  // <2>
request.end();                                    // <3>

request.on('response', (response) => {
  const lastModified = response.headers['last-modified'];

  console.log('Modifié le %s', lastModified);     // <4>
});
