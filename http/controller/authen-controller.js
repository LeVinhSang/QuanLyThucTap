class AuthenController {

    constructor(userRepo, authSession, hash) {
        this.userRepo = userRepo;
        this.hash     = hash;
        this.authSession = authSession;
    }

    login(req, res) {

    }
}

module.exports = AuthenController;
