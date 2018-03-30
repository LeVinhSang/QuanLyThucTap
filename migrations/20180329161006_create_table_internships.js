
exports.up = function(knex, Promise) {
    return knex.schema.createTable('internships', function (table) {
        table.increments('id');
        table.integer('duration_id').notNull();
        table.integer('company_manager_id');
        table.datetime('deleted_at')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('internships');
};
