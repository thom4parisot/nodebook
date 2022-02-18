const https = require('https');
const {parse} = require('url');
const url = 'https://apprendre-nodejs.fr/v1/package.json';
const parsedUrl = parse(url);

const request = https.request({ ...parsedUrl, method: 'HEAD'})
request.setHeader('Accept', 'application/json');
request.end();

request.on('response', (response) => {
  const lastModified = response.headers['last-modified'];

  console.log('Dernière modification : %s', lastModified);
});
