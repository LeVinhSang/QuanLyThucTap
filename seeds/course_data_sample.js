
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('duration').del()
    .then(function () {
      // Inserts seed entries
      return knex('duration').insert([
        {id: 1, startDate: '1990/3/1', endDate: '1991/3/1'},
        {id: 2, startDate: '1992/3/1', endDate: '1993/3/1'},
      ]);
    });
};
