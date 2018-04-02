const Course           = require('./course');
const DurationProvider = require('../duration/duration-provider');

let durationProvider   = new DurationProvider();

class CourseFactory {

    make(courseRaw) {
        return durationProvider.provide(courseRaw.duration_id)
            .then(duration => {
                let course = new Course(duration, courseRaw.name);
                course.setId(courseRaw.id);
                course.setInfo(courseRaw.info);
                return course;
            });
    }
}

module.exports = CourseFactory;
