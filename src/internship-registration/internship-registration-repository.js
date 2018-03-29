const status = require('./registration-statuses');
class InternShipRegistrationRepository {

    constructor(connection) {
        this.connection = connection;
    }
    all() {
        this.connection.select().table('registrations').where('status',status.PENDING);
    }


}

module.exports = InternShipRegistrationRepository;