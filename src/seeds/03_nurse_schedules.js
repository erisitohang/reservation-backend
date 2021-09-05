const nurses = require('./data/nurses')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nurse_schedules').del()
    .then(function () {
      const shift_1 = [8, 9, 10, 11, 12, 13, 14]
      const shift_2 = [15, 16, 17, 18, 19, 20, 21]
      const startDate = new Date()
      const groupNurse = {}
      const data = []
      for (const nurse of nurses) {
        const { centre_id: centreId, id: nurseId }= nurse
        if (!(centreId in groupNurse)) {
          groupNurse[centreId] = 0
        }
        groupNurse[centreId]++
        for (let i = 0; i <= 29; i++) {
          const currentDate = new Date()
          currentDate.setDate(startDate.getDate() + i)
          const date = currentDate.toISOString().slice(0, 10)
          let hours = shift_1
          if (groupNurse[centreId] >= 5) {
            hours = shift_2
          }
          for (const hour of hours) {  
            data.unshift(
             {
              nurse_id: nurseId,
              date,
              hour
             }
            )
          }
        }
      }
      return knex('nurse_schedules').insert(data);
    });
};
