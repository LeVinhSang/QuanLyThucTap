class Lecturer {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    /**
     *
     * @return {string}
     */
    getName() {
        return this.name;
    }

    /**
     *
     * @param {int} phone
     */
    setPhone(phone) {
        this.phone = phone;
    }

    /**
     *
     * @return {phone|*}
     */
    getPhone() {
        return this.phone;
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
     * @param {string} email
     */
    setEmail(email) {
        this.email = email;
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
     * @param  {string} address
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     *
     * @return {string|*}
     */
    getAddress() {
        return this.address;
    }

}

module.exports = Lecturer;
