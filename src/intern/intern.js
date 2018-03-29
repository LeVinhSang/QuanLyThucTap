class Intern {

    /**
     *
     * @param {int} code
     */
    constructor(code) {
        this.code = code;
    }

    /**
     *
     * @return {int|*}
     */
    getCode() {
        return this.code;
    }

    /**
     *
     * @param {string} name
     */
    setName(name) {
        this.name = name;
    }

    /**
     *
     * @return {string|*}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @return {Contact|*}
     */
    getContact() {
        return this.contact;
    }

    /**
     *
     * @param {Contact} contact
     */
    setContact(contact) {
        this.contact = contact;
    }
}

module.exports = Intern;
