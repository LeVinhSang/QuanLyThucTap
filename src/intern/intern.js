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
     * @return {string | null}
     */
    getStauts() {
        return this.status;
    }

    /**
     *
     * @return {string|*}
     */
    getSex() {
        return this.sex;
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

    /**
     *
     * @param {string} status
     */
    setStatus(status) {
        this.status = status;
    }

    /**
     *
     * @param {string} sex
     */
    setSex(sex) {
        this.sex = sex;
    }
}

module.exports = Intern;
