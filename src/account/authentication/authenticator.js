class Authenticator {

    constructor(credentialRepo, hash) {
        this.credentialRepo = credentialRepo;
        this.hash           = hash;
    }

    logIn(credential) {
        this.credentialRepo.getCredentialbyUsername(credential.getUsername())
            .then((credentialRawData) => {
                if(!credentialRawData[0]) {
                    return new Error('username not exist!');
                }
                return this.hash.compare(credential.getPassword(), credentialRawData[0].password);
            }).then()
    }

}

module.exports = Authenticator;
