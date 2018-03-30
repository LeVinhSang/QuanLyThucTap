
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {id: 1, manager: "Mr.Z" , phone: "21222324", address: "Hanoi", name: "Company A"},
        {id: 2, manager: "Mr.X" , phone: "31323334", address: "Lao", name: "Company B"}
      ]);
    });
};
