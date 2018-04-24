process.on('exit', (code) => {
  const {filename} = process.mainModule;

  console.log('Le fichier %s s\'arrête avec un code %d', filename, code);
});
