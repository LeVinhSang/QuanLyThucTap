
exports.up = function(knex, Promise) {
    return knex.schema.createTable('duration', function (table) {
        table.date('startDate');
        table.date('endDate');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('duration');
};
