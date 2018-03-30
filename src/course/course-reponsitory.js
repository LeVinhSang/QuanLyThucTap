const CourseFactory = require('./course-factory');
class CourseReponsitory {
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @return {Promise<Course[]>}
     */
    all() {
        let courseFactory = new CourseFactory();
        return this.connection('course').where({deleted_at : null}).then(courses=>
            courses.map(course => courseFactory.makeFromDB(course)));
    }
    /**
     *
     * @return {Promise<Course>}
     */
    search(id) {
        let courseFactory = new CourseFactory();
        return this.connection('course').where({id : id, delete_at : null}).then(course => courseFactory(course))
    }
}
module.exports = CourseReponsitory;