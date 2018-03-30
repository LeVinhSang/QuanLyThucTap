
exports.up = function(knex, Promise) {
    return knex.schema.createTable('companies', function (table) {
        table.increments('id');
        table.string('name').notNull();
        table.integer('phone');
        table.string('email');
        table.string('address');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('companies');
};
