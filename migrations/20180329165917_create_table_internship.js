
exports.up = function(knex, Promise) {
  return knex.schema.createTable('internShip', function (table) {
      table.increments('id');
      table.string('course_id');
      table.string('lecturer_id');
      table.string('companyManager_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('internShip');
};
