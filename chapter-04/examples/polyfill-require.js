import {Promise as PromisePolyfill} from 'es6-promise';

PromisePolyfill.resolve('ok').then(msg => console.log(msg));

console.log('Promise' in window);                // <1>
console.log(PromisePolyfill === window.Promise); // <2>
