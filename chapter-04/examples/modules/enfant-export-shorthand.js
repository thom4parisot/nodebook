const number = 42;
const random = (limit = 100) => Math.floor(Math.random() * limit);

module.exports = {number, random};      // <1>
