'use strict';

process.emit('error', new Error('Oops !'));             // <1>

process.on('error', (error) => console.error(error));   // <2>
