const status = require('./registration-statuses');

class InternShipRegistrationService {
    /**
     *
     * @param {Connection}connection
     */
    constructor(connection) {
        this.connection   = connection;
    }

    /**
     *
     * @param {InternshipRegistration} registration
     */
    send(registration) {
        return this.connection('registrations').insert({
            intern_id: registration.getIntern().getId(),
            intern_ship_id: registration.getInternShip().getId(),
            status: status.PENDING
        })
    }

    confirm(id) {
        return this.connection('registrations').update({
            status: status.CONFIRMED
        }).where('id', id);
    }

}

module.exports = InternShipRegistrationService;
