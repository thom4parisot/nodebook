const asyncRandom = () => new Promise((resolve) => {  // <1>
  const timing = Math.floor(Math.random() * 2000);
  setTimeout(() => resolve(`résolu en ${timing}ms`), timing);
});

const all = Promise.all([                             // <2>
  asyncRandom(),
  asyncRandom(),
  asyncRandom()
]);

all.then(messages => console.log(messages));          // <3>
