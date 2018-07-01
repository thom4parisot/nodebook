const {get} = require('https');
let count = 0;

get('https://oncletom.io/node.js/index.html', (response) => {
  response.on('data', (data) => {
    count = count + 1;
    const ko = data.length/1024;
    console.log('Morceau #%d : %iKo', count, ko); // <1>
  });

  response.on('end', () => {                      // <2>
    console.log('Fini (%d morceaux)', count);     // <3>
  });
});
