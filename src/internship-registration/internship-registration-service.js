const status = require('./registration-statuses');

class InternShipRegistrationService {

    constructor(connection) {
        this.connection   = connection;
    }

    send(registration) {
        return this.connection.from('registrations').insert({
            intern_id: registration.getIntern().getId(),
            internship_id: registration.getInternShip().getId(),
            status: status.PENDING
        });
    }

    confirm(id) {
        return this.connection.from('registrations').update({
            status: status.CONFIRMED
        }).where('id', id);
    }

}

module.exports = InternShipRegistrationService;
