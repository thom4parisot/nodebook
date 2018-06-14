'use strict';

const date = new Date();                    // <1>
const hour = date.getHours();
const minutes = date.getMinutes();

console.log(`Il est ${hour}h${minutes}.`);
