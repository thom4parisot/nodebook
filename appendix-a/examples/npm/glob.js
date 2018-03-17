const glob = require('glob');

glob('*.js', (err, files) => {
  if (err) {
    return console.error(err);
  }

   console.log(files); // <1>
});
