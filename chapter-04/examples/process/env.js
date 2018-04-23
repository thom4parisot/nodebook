const {NODE_ENV} = process.env;

if (NODE_ENV === 'dev') {
  console.log('On est en mode développement.');
}

console.log('mode : %s', NODE_ENV);
