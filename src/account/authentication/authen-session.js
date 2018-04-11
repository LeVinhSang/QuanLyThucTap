const Guest = require('./guest');

class AuthSession {

    constructor(userRepository) {
        this.repository = userRepository;
    }

    setSession(session) {
        this.session = session;
    }

    logIn(user) {
        this.session.userId = user.getId();
    }

    check() {
        return !this.session.userId;
    }

    isGuest() {
        return !this.check();
    }

    user() {
        if (this.check()) {
            return this.repository.get(this.session.userId);
        } else {
            return Promise.resolve(new Guest());
        }
    }
}

module.exports = AuthSession;
