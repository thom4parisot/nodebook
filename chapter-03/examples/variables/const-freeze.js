'use strict';

const table = ['a', 'b'];

table.push('c');
console.log(table);       // <1>

Object.freeze(table);     // <2>
table.push('d');          // <3>
