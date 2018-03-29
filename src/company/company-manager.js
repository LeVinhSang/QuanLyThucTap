class CompanyManager {

    /**
     *
     * @param {Company} company
     * @param {string} name
     */
    constructor(company, name) {
        this.company = company;
        this.name = name;
    }

    getId() {
        return this.id;
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
     * @return {Company|*}
     */
    getCompany() {
        return this.company;
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
     * @param  {int} id
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

module.exports = CompanyManager;
