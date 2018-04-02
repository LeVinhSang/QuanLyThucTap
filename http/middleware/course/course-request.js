const CourseFactory = require('../../../src/course/course-factory');

let courseFactory   = new CourseFactory();

module.exports = (req, res, next) => {
    courseFactory.make(req.body)
        .then((course) => {
            course.setId(req.params.id);
            req.course = course;
            next();
        });
};
