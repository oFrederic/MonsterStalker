exports.up = function (knex) {
  return knex.schema.createTable('monster', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('elements').notNullable();
    table.string('description').notNullable();
    table.string('resistances').notNullable();
    table.string('weaknesses').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('monster');
};
