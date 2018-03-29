class Contact {

    /**
     *
     * @param {int} phone
     * @param {string} email
     */
    constructor(phone, email) {
        this.phone = phone;
        this.email = email;
    }

    /**
     *
     * @return {int|*}
     */
    getPhone() {
        return this.phone;
    }

    /**
     *
     * @return {string|*}
     */
    getEmail() {
        return this.email;
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
     * @return {string|*}
     */
    getAddress() {
        return this.address;
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
     * @param {string} address
     */
    setAddress(address) {
        this.address = address;
    }
}

module.exports = Contact;
