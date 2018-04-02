class InternShipRegistrationRepository {

    constructor(connection) {
        this.connection = connection;
    }

    edit(registration) {
        return this.connection('registrations').update({
            intern_id: registration.getIntern().getId(),
            intern_ship_id: registration.getInternShip().getId()
        }).where({id: registration.getId()})
    }
}

module.exports = InternShipRegistrationRepository;
