
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('course').del()
    .then(function () {
      // Inserts seed entries
      return knex('course').insert([
        {id: 1, startDate: '1995',endDate:'1996'},
        {id: 2, startDate: '1996',endDate:'1997'},
        {id: 3, startDate: '1998',endDate:'1999'},
      ]);
    });
};
