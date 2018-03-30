const Course = require('../../src/course/course');
const Duration = require('../../src/duration/duration');

class CourseFactory {

    /**
     *
     * @param raw
     * @return {Course}
     */
    makeFromDB(raw) {
        let duration = new Duration(raw.startDate, raw.endDate);
        let course = new Course(duration);
        course.setId(raw.id);
        return course;
    }
}
module.exports = CourseFactory;