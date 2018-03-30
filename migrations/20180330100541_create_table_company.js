exports.up = function(knex, Promise) {
  return knex.schema.createTable('company', function (table) {
      table.increments('id');
      table.string('manager');
      table.string('phone');
      table.string('address');
      table.string('name');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('company');
};
