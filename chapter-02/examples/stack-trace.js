'use strict';

const traceAtLevel = (maxLevel, currentLevel) => {
  currentLevel = typeof currentLevel === 'number' ? currentLevel + 1 : 1;

  if (currentLevel < maxLevel) {
    console.log('At level %s', currentLevel);
    traceAtLevel(maxLevel, currentLevel);
  } else {
    console.trace('Level %s', currentLevel);
  }
};

traceAtLevel(5);
