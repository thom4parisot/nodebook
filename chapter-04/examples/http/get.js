const {get} = require('https');
let count = 0;

get('https://oncletom.io/node.js/index.html', (response) => {
  response.on('data', (data) => {
    console.log('Morceau #%d : %iKo', ++count, data.length/1024); // <1>
  });

  response.on('end', () => {                                      // <2>
    console.log('Transmission finie en %d morceaux', count);      // <3>
  });
});
