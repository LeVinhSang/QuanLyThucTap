
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lecturer').del()
    .then(function () {
      // Inserts seed entries
      return knex('lecturer').insert([
        {id: 1, name: 'Mrs.A' , phone: 1020304, address: "Some Where"},
        {id: 2, name: 'Mrs.B' , phone: 1030507, address: "Some Where"},
      ]);
    });
};
