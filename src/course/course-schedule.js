const status = require('./course-status');

class CourseSchedule {

    /**
     *
     * @param {knex} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    add(course) {
        return this.connection('course').insert({
            duration_id: course.getDuration().getId(),
            info: course.getInfo(),
            status: status.CONFIRM
        });
    }

    edit(course) {
        return this.connection('course').insert({
            duration_id: course.getDuration().getId(),
            info: course.getInfo()
        }).where({id: course.getId()});
    }

    pending(id) {
        return this.connection('course').update({
            status: status.PENDING
        }).where({id: id});
    }

    confirm(id) {
        return this.connection('course').update({
            status: status.CONFIRM
        }).where({id: id});
    }
}

module.exports = CourseSchedule;
