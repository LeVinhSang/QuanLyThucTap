
exports.up = function(knex, Promise) {
    return knex.schema.createTable('internshipRegistration', function (table) {
        table.integer('intern');
        table.integer('internship');
        table.string('status');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('internshipRegistration');
};
