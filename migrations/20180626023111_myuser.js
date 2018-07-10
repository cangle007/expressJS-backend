exports.up = function(knex, Promise) {
  return knex.schema.createTable('myuser', table => {
    table.increments('id');
    table
      .string('name')
      .notNullable()
      .defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('myuser');
};
