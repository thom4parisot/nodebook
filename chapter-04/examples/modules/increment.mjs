let counter = 0;

export default () => ++counter;           // <1>
export const reset = () => counter = 0;   // <2>
