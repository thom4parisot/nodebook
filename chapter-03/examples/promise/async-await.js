function asyncRandom() {
  return new Promise((resolve) => {
    const timing = Math.floor(Math.random() * 2000);
    setTimeout(() => resolve(`résolu après ${timing}ms`), timing);
  });
}

(async () => {                                                    // <1>
  const all = [
    await asyncRandom(), await asyncRandom(), await asyncRandom() // <2>
  ];

  console.log(all);                                               // <3>
})();
