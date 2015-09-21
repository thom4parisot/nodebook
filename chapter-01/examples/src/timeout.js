var referenceTime = process.hrtime();
var printT = function(){
  console.log(process.hrtime(referenceTime)[0]);
};

printT();
setTimeout(printT, 1000);
