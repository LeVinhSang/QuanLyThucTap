const LecturerFactory = require('../../../src/lecturer/lecturer-factory');

let lecturerFactory   = new LecturerFactory();

let lecturerRequest = (req, res, next) => {
    req.lecturer = lecturerFactory.makeFromRequest(req.body);
    req.lecturer.setId(req.params.id);
    next();
};

module.exports = lecturerRequest;
