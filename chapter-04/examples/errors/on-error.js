'use strict';

process.on('error', (error) => console.error(error));

process.emit('error', new Error('Oops !'));
