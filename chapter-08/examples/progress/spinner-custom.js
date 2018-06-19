'use strict';

const ora = require('ora');
const progress = ora({
  color: 'yellow',
  spinner: {
    frames: ['···', '•··', '••·', '•••'], // <1>
    interval: 1000                        // <2>
  }
});

progress.start('Un-deux-trois…');
setTimeout(() => {
  progress.stopAndPersist({ symbol: '☀️', text: 'Soleil !' });
  process.exit(0);
}, 4000);
