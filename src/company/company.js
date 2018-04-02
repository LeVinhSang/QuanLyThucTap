class Company {

    /**
     *
     * @param {string} manager
     */
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
     * @param {int} id
     */
    setId(id) {
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

}

module.exports = Company;
