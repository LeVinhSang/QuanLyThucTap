
exports.up = function(knex, Promise) {
    return knex.schema.createTable('interns', function (table) {
        table.increments('id');
        table.integer('code').notNull();
        table.string('name').notNull();
        table.integer('contact_id').notNull()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('interns')
};
