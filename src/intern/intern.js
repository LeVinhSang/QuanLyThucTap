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
     * @return {string|*}
     */
    getAddress() {
        return this.address;
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
     * @param {string} address
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     *
     * @param {string} email
     */
    setEmail(email) {
        this.email = email;
    }
}

module.exports = Intern;
