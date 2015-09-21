'use strict';

var counter = 0;

console.log(module.id);

module.exports = {
  run: function(){
    return counter++;
  }
};