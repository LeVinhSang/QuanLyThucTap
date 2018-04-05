class RegistrationNotExistedPolicy {

    constructor(connection) {
        this.connection = connection;
    }

    exist(intern) {
        return this.connection('registrations').where('intern_id', intern.getId()).then(function(registrationRawData){
            return (!registrationRawData.length);
        });
    }
}

module.exports = RegistrationNotExistedPolicy;
