class InternshipRegistration {

    /**
     *
     * @param {Intern} intern
     * @param {Internship} internship
     * @param {String} status
     */
    constructor(intern, internship, status) {
        this.intern     = intern;
        this.internship = internship;
        this.status     = status;
    }

    /**
     *
     */
    getIntern() {
        return this.intern;
    }

    /**
     *
     * @return {Internship|*}
     */
    getInternShip() {
        return this.internship;
    }

    /**
     *
     * @return {String|*}
     */
    getStatus() {
        return this.status;
    }
}

module.exports = InternshipRegistration;
