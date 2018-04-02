const status = require('./course-status');

class CourseRepository {

    /**
     * 
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }
    
    add(course) {
        return this.connection('courses').insert({
            duration_id: course.getDuration().getId(),
            info: course.getInfo(),
            status: status.CONFIRM
        });
    }
    
    edit(course) {
        return this.connection('courses').insert({
            duration_id: course.getDuration().getId(),
            info: course.getInfo(),
        });
    }
    
}

module.exports = CourseRepository;
