class Credential {

    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
}

module.exports = Credential;
