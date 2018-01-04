import {log} from './dom-log.js';

console.log(typeof pro);    // <1>
console.log(typeof log);    // <2>
console.log(typeof window); // <3>

window.addEventListener('load', () => {
  log('OK');
});
