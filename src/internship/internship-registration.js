class InternshipRegistration {
    /**
     *
     * @param {Intern}intern
     * @param {Internship}internship
     * @param status
     */
    constructor(intern, internship) {
        this.intern = intern;
        this.internship = internship;
        this.status = status;
    }

    /**
     *
     * @return {Intern}
     */
    getIntern() {
        return this.intern;
    }

    /**
     *
     * @return {Internship}
     */
    getInternShip() {
        return this.internship
    }

    getStatus() {
        return this.status;
    }
}

module.exports = InternshipRegistration;
