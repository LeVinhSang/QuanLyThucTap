class RegistrationProvider {

    constructor(connection) {
        this.connection = connection;
    }

    provide(internship){
        return this.connection('registration').where({internship_id : internship.getId()});
    }
}

module.exports = RegistrationProvider;
