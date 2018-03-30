
exports.up = function(knex, Promise) {
    return knex.schema.createTable('courses', function (table) {
        table.increments('id');
        table.string('duration').notNull();
        table.string('status').notNull();
        table.datetime('deleted_at');
    })
};

exports.down = function(knex, Promise) {
  
};
