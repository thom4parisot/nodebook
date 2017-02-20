const chance = require('chance').Chance();

module.exports = (app) => {
  app.get('/new-users', (req, res) => {
    res.send(chance.name());
  });
};
