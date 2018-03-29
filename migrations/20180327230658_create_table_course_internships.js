
exports.up = function(knex, Promise) {
    return knex.schema.createTable('course_internships', function (table) {
        table.increments('id');
        table.date('start_time').notNull();
        table.string('information');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('course_internships');
};
