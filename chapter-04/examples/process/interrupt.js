const log = (msg) => {
  console.log(`${new Date().toISOString()} - ${msg}`);
}

log('Processus démarré');                     // <1>

process.on('SIGINT', () => {                  // <2>
  log('Processus terminé (manuellement)');
  process.exit(0);                            // <3>
});

setTimeout(() => {                            // <4>
  log('Processus terminé (timeout)');
  process.exit(0);
}, 5000)
