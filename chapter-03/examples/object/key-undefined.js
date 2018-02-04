const francine = {
  first_name: 'Francine',
  location: 'Drôme',
  twitter: undefined
};

console.log(Boolean(francine.twitter));          // <1>
console.log(francine.twitter !== undefined);     // <2>

console.log(francine.hasOwnProperty('twitter')); // <3>
console.log('twitter' in francine);              // <4>
