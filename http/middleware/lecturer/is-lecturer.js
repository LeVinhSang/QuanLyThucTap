const connection = require('../../../database/knex-connection');

class IsLecturer {
    /**
     *
     * @param {connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }
    
    checkLecturer(id) {
        return this.connection.from('lecturer').where({ id: id});
    }
}
module.exports = IsLecturer;
