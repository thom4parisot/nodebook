const {get} = require('https');
const url = 'https://apprendre-nodejs.fr/v1/package.json';

get(url, (response) => {                        // <1>
  response.on('data', (data) => {
    console.log(data.toString());               // <2>
  });
});
