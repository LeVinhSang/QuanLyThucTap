
exports.up = function(knex, Promise) {
    return knex.schema.createTable('intern', function (table) {
        table.increments('id');
        table.string('code');
        table.string('gender');
        table.integer('lecturer_id');
        table.integer('company_id');
        table.string('phone');
        table.string('address');
        table.string('name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('intern');
};
