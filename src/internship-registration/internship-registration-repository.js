class InternShipRegistrationRepository {
    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection   = connection;
    }

    /**
     *
     * @param {InternshipRegistration}registration
     */
    edit(registration) {
        return this.connection('registrations').update({
            intern_ship_id: registration.getInternShip().getId(),
        }).where({intern_id: registration.getIntern().getId()})
    }
    all() {
        return this.connection('registrations').where({deleted_at : null}).then(result=>{
            return result;
        })
    }
    remove(id) {
        return this.connection('registrations').update({
            deleted_at: new Date().toLocaleTimeString()
        }).where({id : id})
    }

}

module.exports = InternShipRegistrationRepository;