'use strict';

module.exports = {
  up (database) {                                  // <1>
    return database.addColumn('fromages', 'aoc', { // <2>
      type: 'boolean',                             // <3>
      defaultValue: false,
    });
  }
}
