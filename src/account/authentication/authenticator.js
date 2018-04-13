class Authenticator {

    constructor(credentialRepo, hash) {
        this.credentialRepo = credentialRepo;
        this.hash           = hash;
    }


}

module.exports = Authenticator;
