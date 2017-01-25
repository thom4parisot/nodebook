'use strict';

const referenceTime = process.hrtime();
const printT = () => console.log(process.hrtime(referenceTime)[0]);

printT();
setTimeout(printT, 1000);
