const knex = require('knex')(require('../../configs/db'))

const getSlotsByDate = async (centreId, date, hour) => {
  let operator = '>'
  if (hour > 0) {
    operator = '='
  }
  return await knex
    .count('nurse_schedules.date as total')
    .from('nurse_schedules')
    .join('nurses', `nurses.id`, '=', `nurse_schedules.nurse_id`)
    .where('nurses.centre_id', centreId)
    .andWhere('hour', operator, hour)
    .having('date', '=', date)
    .groupBy('nurse_schedules.date')
    .first()
};

const getTimeSlot = async (centreId, date, hour = 0) => {
  let operator = '>'
  if (hour > 0) {
    operator = '='
  }
  return await knex
    .select('nurse_schedules.hour')
    .count('nurse_schedules.hour as total')
    .from('nurse_schedules')
    .leftJoin('nurses', `nurses.id`, '=', `nurse_schedules.nurse_id`)
    .where('nurses.centre_id', centreId)
    .andWhere('date', date)
    .having('nurse_schedules.hour', operator, hour)
    .groupBy('nurse_schedules.hour')
};


module.exports = {
  getSlotsByDate,
  getTimeSlot,
};
