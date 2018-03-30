class Company {
    constructor(manager) {
        this.manager = manager;
    }

    /**
     *
     * @return {*}
     */
    getManager() {
        return this.manager;
    }

    /**
     *
     * @param {int} Id
     */
    setId(Id) {
        this.id = id;
    }

    /**
     *
     * @return {*}
     */
    getId() {
        return this.id
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
     * @return {*}
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
     * @return {*}
     */
    getPhone() {
        return this.phone;
    }

}

module.exports = Company;
