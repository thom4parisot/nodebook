const text = 'I ♥ Node.js & Anode';

console.log(text.match(/node/i));   // <1>
console.log(text.match(/ode/g));    // <2>
console.log(text.match(/node/ig));  // <3>
