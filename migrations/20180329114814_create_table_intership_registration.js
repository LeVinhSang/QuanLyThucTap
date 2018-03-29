
exports.up = function(knex, Promise) {
    return knex.schema.createTable('registrations', function (table) {
        table.increments('id');
        table.integer('intern_id').notNull();
        table.integer('internship_id').notNull();
        table.string('status').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('registrations');
};
