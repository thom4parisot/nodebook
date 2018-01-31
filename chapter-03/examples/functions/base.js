const hello = (mot) => `Hello ${mot}`;

console.log(hello);           // <1>
console.log(hello('World'));  // <2>
console.log(hello('toi'));

const random = () => {
  const limit = 100;
  
  return Math.floor(Math.random() * limit);
};

console.log(random());        // <3>
