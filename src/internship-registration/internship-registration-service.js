const status = require('./registration-statuses');

class InternShipRegistrationService {

    constructor(knex) {
        this.knex   = knex;
    }

    send(registration) {
        return this.knex.from('registrations').insert({
            intern_id: registration.getIntern().getId(),
            intern_ship_id: registration.getInternShip().getId(),
            status: status.PENDING
        })
    }

    confirm(id) {
        return this.knex.from('registrations').update({
            status: status.CONFIRMED
        }).where('id', id);
    }

}

module.exports = InternShipRegistrationService;
