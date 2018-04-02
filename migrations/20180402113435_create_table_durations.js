
exports.up = function(knex, Promise) {
    return knex.schema.createTable('durations', function(table) {
        table.increments('id');
        table.date('start_date').notNull();
        table.date('end_date').notNull();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('durations');
};
