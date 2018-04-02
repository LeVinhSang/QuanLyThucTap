class InternShipRegistrationRepository {
    constructor(connection) {
        this.connection = connection;
    }

    addInternShipRegistration(registration) {
        return this.connection.select().from('internshipRegistration').insert({
            intern : registration.getIntern(),
            internship : registration.getInternShip(),
        }).where({
            status: registration.status.CONFIRMED
        })
    }

    editInternShipRegistration(registration) {
        return this.connection.select().from('internshipRegistration').update({
            intern : registration.getIntern(),
            internship : registration.getInternShip()
        }).where({
            status: registration.status.CONFIRMED
        })
    }
}

module.exports = InternShipRegistrationRepository;