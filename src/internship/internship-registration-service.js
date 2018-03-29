class InternShipRegistrationService {

    constructor(knex) {
        this.knex   = knex;
    }

    send(registration) {
        return this.knex.from('registrations').insert({
            intern_id: registration.getIntern().getId(),
            intern_ship_id: registration.getInternShip().getId(),
            status: 'PENDING'
        })
    }

    confirm(registration) {
        return this.knex.from('registrations').update({
            status: 'CONFIRMED'
        }).where('id', registration.getId());
    }
}

module.exports = InternShipRegistrationService;
