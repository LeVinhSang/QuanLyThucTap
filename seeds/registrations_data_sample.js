
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registrations').del()
    .then(function () {
      // Inserts seed entries
      return knex('registrations').insert([
        {id: 1, intern_id: '1',intern_ship_id:'1'},
        {id: 2, intern_id: '3',intern_ship_id:'1'},
        {id: 3, intern_id: '2',intern_ship_id:'1'},
      ]);
    });
};
