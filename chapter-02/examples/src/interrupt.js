'use strict';

var maxTries = parseInt(process.argv[2], 10) || 5;

function terminateIn(tries){
  return function(){
    if (--tries === 0){
      console.log('Arrêt du programme…')
      process.exit(0);

      return;
    }

    console.log('Nombre d\'essais restants: %s', tries);
  }
}


console.log('Appuyer %s fois sur CTRL+C arrêtera le programme.', maxTries);
process.on('SIGINT', terminateIn(maxTries));
process.stdin.on('data', function(){});
