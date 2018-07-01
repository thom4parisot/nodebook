const {get} = require('https');
const url = 'https://oncletom.io/node.js/package.json';

get(url, (response) => {                        // <1>
  response.on('data', (data) => {
    console.log(data.toString());               // <2>
  });
});
