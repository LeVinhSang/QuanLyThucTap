class Manager {

    /**
     *
     * @param {string} name
     */
    constructor(name) {
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
        return this.id;
    }

    /**
     *
     * @param phone
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

module.exports = Manager;
