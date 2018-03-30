
exports.up = function(knex, Promise) {
    return knex.schema.createTable('login', function (table) {
        table.string('user_name').primary();
        table.string('password').notNull();
        table.date('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('login');
};
