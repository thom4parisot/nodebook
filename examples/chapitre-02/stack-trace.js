'use strict';

function traceAtLevel(maxLevel, currentLevel){
  currentLevel = typeof currentLevel === 'number' ? currentLevel+1 : 1;

  if (currentLevel < maxLevel){
    console.log('At level', currentLevel);
    traceAtLevel(maxLevel, currentLevel);
  }
  else {
    console.trace('Level ' + currentLevel);
  }
}

traceAtLevel(5);
