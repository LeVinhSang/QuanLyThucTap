
exports.up = function(knex, Promise) {
    return knex.schema.createTable('interns', function (table) {
        table.increments('id');
        table.integer('code').notNull();
        table.string('name').notNull();
        table.string('status').notNull();
        table.integer('phone');
        table.string('email');
        table.string('address');
        table.datetime('deleted_at')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('interns')
};
