const browserSync = require('browser-sync');

module.exports = (server) => {             // <1>
  return port => {                         // <2>
    const PUBLIC_PORT = 4000;              // <3>
    const bs = browserSync.create();

    server.listen(port);                   // <4>

    bs.init({                              // <5>
      files: ['./examples'],
      port: PUBLIC_PORT,
      open: false,
      logPrefix: 'nodebook',
      proxy: {
        target: `http://localhost:${port}`,// <6>
        ws: true,
      }
    });
  };
};
