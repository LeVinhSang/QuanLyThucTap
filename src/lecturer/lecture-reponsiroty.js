const LecturerFactory = require('./lecturer-factory');

class Lecturer {
    constructor(connection) {
        this.connection = connection;
    }
    search(id) {
        return this.connection('lecturer').where({id : id, deleted_at : null}).then(lecturer => {
            let lecturerFactory = new LecturerFactory();
            return lecturerFactory.makeFromDB(lecturer[0]);
        })
    }
}
module.exports = Lecturer;