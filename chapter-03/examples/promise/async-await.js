function asyncRandom() {
  return new Promise((resolve) => {
    const timing = Math.floor(Math.random() * 2000);
    setTimeout(() => resolve(`résolu en ${timing}ms`), timing);
  });
}

(async () => {                  // <1>
  const all = [                 // <2>
    await asyncRandom(),
    await asyncRandom(),
    await asyncRandom()
  ];

  console.log(all);             // <3>
})();
