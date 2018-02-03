const soundcheck = ['un', 'deux', 'un', 'deux'];

console.log(soundcheck.indexOf('un'));        // <1>
console.log(soundcheck.indexOf('deux'));      // <2>
console.log(soundcheck.indexOf('trois'));     // <3>

console.log(soundcheck.lastIndexOf('deux'));  // <4>

console.log(soundcheck.includes('deux'));     // <5>
console.log(soundcheck.includes('trois'));    // <6>
