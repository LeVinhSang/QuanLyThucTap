const LecturerFactory = require('../../../src/lecturer/lecturer-factory');
let lecturerFactory = new LecturerFactory();

module.exports = function (request, response, next) {
  lecturerFactory.makeFromRequest(request.body)
      .then( lecturer => {
          lecturer.setId(request.params.id);
          request.lecturer = lecturer;
          next();
      })
};