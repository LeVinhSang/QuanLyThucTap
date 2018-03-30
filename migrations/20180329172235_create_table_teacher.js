
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lecturer', function (table) {
      table.increments('id');
        table.string('phone');
        table.string('address');
        table.string('name');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('lecturer');
};
