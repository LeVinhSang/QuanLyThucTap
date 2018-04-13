class CredentialService {

    constructor(connection) {
        this.connection = connection;
    }

    getCredential(credential){
        this.connection('credentials').where({username : credential.getUserame()});
    }
}

module.exports = CredentialService;
