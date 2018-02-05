const asyncRandom = () => new Promise((resolve) => {
  const timing = Math.floor(Math.random() * 2000);
  setTimeout(() => resolve(`résolu après ${timing}ms`), timing);        // <1>
});

const all = Promise.all([asyncRandom(), asyncRandom(), asyncRandom()]); // <2>
all.then(messages => console.log(messages));                            // <3>
