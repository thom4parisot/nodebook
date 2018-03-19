import increment, {reset} from './increment.mjs'; // <1>

increment();
console.log(increment());

reset();                                          // <2>
console.log(increment());
