class CredentialService {

    constructor(connection) {
        this.connection = connection;
    }

    getCredentialbyUsername(credential){
        this.connection('credentials').where({username : credential.getUsername()});
    }
}

module.exports = CredentialService;
