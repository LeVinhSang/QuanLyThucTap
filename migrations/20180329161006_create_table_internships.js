
exports.up = function(knex, Promise) {
    return knex.schema.createTable('internships', function (table) {
        table.increments('id');
        table.integer('duration_id').notNull();
        table.string('status').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('internships');
};
