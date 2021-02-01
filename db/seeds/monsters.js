exports.seed = function (knex) {
  return knex('monster')
    .del()
    .then(function () {
      return knex('monster').insert([
        {
          name: 'Bazelgeuse',
          elements: 'fire',
          description:
            'A nefarious flying wyvern that travels the New World in search of prey.',
          resistances: 'fire',
          weaknesses: 'water',
        },
        {
          name: 'Behemoth',
          elements: 'fire',
          description: 'A powerful beast from another world.',
          resistances: 'fire',
          weaknesses: 'water',
        },
        {
          name: 'Deviljho',
          elements: 'dragon',
          description:
            'A monster that must feed constantly and will devour anything in its path.',
          resistances: 'dragon',
          weaknesses: 'ice',
        },
        {
          name: 'Diablos',
          elements: 'earth',
          description: 'The apex monster of the Wildspire Waste.',
          resistances: 'earth',
          weaknesses: 'electricity',
        },
      ]);
    });
};
