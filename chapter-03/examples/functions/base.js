const hello = (mot) => `Hello ${mot}`;  // <1>

console.log(hello);                     // <2>
console.log(hello('World'));            // <3>
console.log(hello('toi'));

const random = () => {
  const limit = 100;

  return Math.floor(Math.random() * limit);
};

console.log(random());                  // <4>
