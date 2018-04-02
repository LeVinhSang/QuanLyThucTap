
exports.up = function(knex, Promise) {
    return knex.schema.createTable('internships', function (table) {
        table.increments('id');
        table.integer('duration_id').notNull();
        table.integer('course_id');
        table.integer('company_manager_id');
        table.string('status');
        table.datetime('deleted_at')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('internships');
};
