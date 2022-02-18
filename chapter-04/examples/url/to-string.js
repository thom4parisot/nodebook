const example = new URL('https://apprendre-nodejs.fr/v1/');
example.pathname = '/';
example.hash = '#top';

console.log(example.toString());  // <1>
