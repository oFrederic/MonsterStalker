exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('monster')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('monster').insert([
        {
          id: 1,
          name: 'Bazelgeuse',
          elements: 'fire',
          description:
            'A nefarious flying wyvern that travels the New World in search of prey.',
          resistances: 'fire',
          weaknesses: 'water',
        },
        {
          id: 2,
          name: 'Behemoth',
          elements: 'fire',
          description: 'A powerful beast from another world.',
          resistances: 'fire',
          weaknesses: 'water',
        },
        {
          id: 3,
          name: 'Deviljho',
          elements: 'dragon',
          description:
            'A monster that must feed constantly and will devour anything in its path.',
          resistances: 'dragon',
          weaknesses: 'ice',
        },
        {
          id: 4,
          name: 'Diablos',
          elements: 'earth',
          description: 'The apex monster of the Wildspire Waste.',
          resistances: 'earth',
          weaknesses: 'electricity',
        },
      ]);
    });
};
