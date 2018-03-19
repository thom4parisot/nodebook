const number = 42;

module.exports.number = number;
module.exports.random = (limit = 100) => Math.floor(Math.random() * limit);
