class CredentialService {

    constructor(connection) {
        this.connection = connection;
    }

    getCredential(credential){
        this.connection('credentials').where({username : credential.getUsername()});
    }
}

module.exports = CredentialService;
