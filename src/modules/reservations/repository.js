const knex = require('knex')(require('../../configs/db'))

const getReservedByDate = async (centreId, date) => {
  return await knex
    .count('date as reserved')
    .from('reservations')
    .where('centre_id', centreId)
    .having('date', '=', date)
    .groupBy('date')
    .first()
};

const getReserved = async (centreId, date, hour = 0) => {
  let operator = '>'
  if (hour > 0) {
    operator = '='
  }
  return await knex
    .select('hour')
    .count('hour as reserved')
    .from('reservations')
    .where('centre_id', centreId)
    .andWhere('date', date)
    .having('hour', operator, hour)
    .groupBy('hour')
};

const getByNric = async (nric) => {
  return await knex
    .select('id')
    .from('reservations')
    .where('nric', nric)
    .first()
};

const insert = async (centreId, nric, date, hour) => {
  return await knex('reservations').insert({
    centre_id: centreId,
    nric,
    date,
    hour,
  });
};

module.exports = {
  getReservedByDate,
  getReserved,
  getByNric,
  insert,
};
