'use strict';

const runServer = require('../../server.js');

module.exports = {
  command: 'read',
  desc: 'Démarre la lecture du livre au format HTML',
  builder: (yargs) => yargs.options({
    port: {
      default: 3000,
      type: 'number'
    }
  }),
  handler: ({port}) => runServer(port)
};
