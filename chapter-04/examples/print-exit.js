process.on('exit', (code) => {
  const {filename} = process.mainModule;

  console.log(`${filename} : arrêt avec le code ${code}`);
});
