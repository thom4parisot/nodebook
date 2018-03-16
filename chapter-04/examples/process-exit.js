console.log('Le processus démarre');

process.on('exit', (code) => {
  console.log(`Le processus termine avec le code ${code}`);
});
