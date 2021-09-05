const nurses = require('./data/nurses')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nurses').del()
    .then(function () {
      return knex('nurses').insert(nurses);
    });
};
