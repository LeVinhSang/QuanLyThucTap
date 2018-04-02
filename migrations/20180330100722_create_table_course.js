
exports.up = function(knex, Promise) {
    return knex.schema.createTable('courses', function (table) {
        table.increments('id');
        table.string('duration_id').notNull();
        table.string('info');
        table.string('status').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('courses')
};
