
exports.up = function(knex, Promise) {
    return knex.schema.createTable('duration', function (table) {
        table.increments('id');
        table.date('startDate').notNull();
        table.date('endDate').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('duration');
};
