const example = new URL('https://thom4.net');
example.pathname = '/';
example.hash = '#top';

console.log(example.toString());  // <1>
