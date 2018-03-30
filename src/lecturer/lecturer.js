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
     * @return {*}
     */
    getName() {
        return this.name = name;
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
     * @return {int|*}
     */
    getId() {
        return this.id;
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

module.exports = Lecturer;
