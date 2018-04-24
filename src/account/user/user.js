class User {

    constructor(personalInformation) {
        this.personalInformation = personalInformation;
    }

    getPersonalInformation() {
        return this.personalInformation;
    }

    setCredential(credential) {
        this.credential = credential;
    }

    getCredential() {
        return this.credential;
    }
    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setRole(role) {
        this.role = role;
    }

    getRole() {
        return this.role;
    }
}

module.exports = User;
