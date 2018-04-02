const status = require('./course-status');

class CourseService {

    /**
     * 
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    open(id) {
        return this.connection('courses').update({
            status: status.PENDING
        }).where({id: id});
    }

    confirm(id) {
        return this.connection('courses').insert({
            status: status.CONFIRM
        }).where({id: id});
    }
    
}

module.exports = CourseService;
