const status = require('./registration-statuses');

class InternShipRegistrationService {

    constructor(connection) {
        this.connection   = connection;
    }

    send(registration) {
        return this.connection.from('registrations').insert({
            intern_id: registration.getIntern().getId(),
            intern_ship_id: registration.getInternShip().getId(),
            status: status.PENDING
        });
    }

    confirm(id) {
        return this.connection.from('registrations').update({
            status: status.CONFIRMED
        }).where('id', id);
    }

    update(registration) {
        return this.connection('registrations').update({
            intern_id: registration.getIntern().getId(),
            intern_ship_id: registration.getInternShip().getId()
        }).where({id: registration.getId()})
    }

}

module.exports = InternShipRegistrationService;
