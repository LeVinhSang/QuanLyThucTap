class InternshipRegistration {
    constructor(intern, internship, status) {
        this.intern     = intern;
        this.internship = internship;
        this.status     = status;
    }

    getIntern() {
        return this.intern;
    }

    getInternShip() {
        return this.internship;
    }

    getStatus() {
        return this.status;
    }
}

module.exports = InternshipRegistration;
