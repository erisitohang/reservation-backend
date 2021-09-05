const knex = require('knex')(require('../../configs/db'))

const getCentres = async () => {
  return await knex
    .select('id', 'name', 'address', 'vaccine_type')
    .from('vaccination_centres')
};


module.exports = {
  getCentres,
};
