const {get} = require('https');

get('https://oncletom.io/node.js/package.json', (response) => { // <1>
  response.on('data', (data) => {
    console.log(data.toString());                               // <2>
  });
});
