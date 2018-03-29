class Company {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    getContact() {
        return this.contact;
    }

    /**
     *
     * @return {int|*}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @param {Contact} contact
     */
    setContact(contact) {
        this.contact = contact;
    }
}

module.exports = Company;
