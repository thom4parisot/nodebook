'use strict';

process.on('error', (error) => console.error(error));   // <2>

process.emit('error', new Error('Oops !'));             // <1>
