
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('intern').del()
    .then(function () {
      // Inserts seed entries
      return knex('intern').insert([
        {id: 1, name: 'Mr.A', code : 123, gender: 'male', phone: 1234 , company_id: 1,
            address: "I'm here", lecturer_id: 1 },
        {id: 2, name: 'Mr.A', code : 1234, gender: 'male', phone: 12345 , company_id: 2,
            address: "I'm here", lecturer_id: 2 }
      ]);
    });
};
