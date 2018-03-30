
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('internShip').del()
    .then(function () {
      // Inserts seed entries
      return knex('internShip').insert([
        {id: 1, course_id: '1', lecturer_id :'1', companyManager_id: '1'},
        {id: 2, course_id: '1', lecturer_id :'2', companyManager_id: '2'},
        {id: 3, course_id: '2', lecturer_id :'3', companyManager_id: '3'},
      ]);
    });
};
