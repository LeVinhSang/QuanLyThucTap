
exports.up = function(knex, Promise) {
    return knex.schema.createTable('course', function (table) {
        table.increments('id');
        table.string('startDate');
        table.string('endDate');
        table.datetime('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('course');
};
