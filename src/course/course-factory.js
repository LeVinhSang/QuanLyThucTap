const Course = require('./course');

class CourseFactory {

    make(courseRaw) {
        let course = new Course(courseRaw.code);
        course.setId(courseRaw.id);
        course.setName(courseRaw.name);
        course.setPhone(courseRaw.phone);
        course.setEmail(courseRaw.email);
        course.setGender(courseRaw.gender);
        course.setAddress(courseRaw.address);
        return course;
    }
}

module.exports = courseFactory;
