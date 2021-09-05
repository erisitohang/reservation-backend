
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vaccination_centres').del()
    .then(function () {
      // Inserts seed entries
      return knex('vaccination_centres').insert([
        {
          id: 1,
          name: 'Radin Mas Community Club',
          address: '1 Telok Blangah Crescent, Singapore 098915',
          vaccine_type: 'Moderna',
        },
        {
          id: 2,
          name: 'Raffles City Convention Centre',
          address:
            '252 North Bridge Road, Singapore 179103, Level 4 Orchard Room',
          vaccine_type: 'Pfizer',
        },
        {
          id:  3,
          name: 'Tampines East Community Club',
          address: 'Tampines East Community Club',
          vaccine_type: 'Moderna',
        },
        {
          id: 4,
          name: 'Bedok Community Centre',
          address: '850 New Upper Changi Road, Singapore 467352',
          vaccine_type: 'Pfizer',
        },
        {
          id: 5,
          name: 'Woodlands Community Club',
          address: '1 Woodlands Street 81, Singapore 738526',
          vaccine_type: 'Moderna',
        },
        {
          id: 6,
          name: 'Woodlands Galaxy Community Club',
          address: '31 Woodlands Avenue 6, Singapore 738991',
          vaccine_type: 'Pfizer',
        },
        {
          id: 7,
          name: 'Kebun Baru Community Club',
          address: '216 Ang Mo Kio Avenue 4, Singapore 569897',
          vaccine_type: 'Mordena',
        },
        {
          id: 8,
          name: 'Sengkang Community Club',
          address:
            '2 Sengkang Square, #01-01 Sengkang Community Hub, Singapore 545025',
          vaccine_type: 'Pfizer',
        },
        {
          id: 9,
          name: 'Hong Kah North Community Club',
          address: '30 Bukit Batok Street 31, Singapore 659440',
          vaccine_type: 'Mordena',
        },
        {
          id: 10,
          name: 'Former Hong Kah Secondary School',
          address: '931 Jurong West Street 42, Singapore 649370',
          vaccine_type: 'Pfizer',
        },
      ]);
    });
};
