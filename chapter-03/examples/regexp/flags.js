const text = 'I ❤️ Node.js & ANODE';

console.log(text.match(/node/i));   // <1>
console.log(text.match(/ode/g));
console.log(text.match(/node/ig));  // <2>
console.log(text.match(/❤️/u));
