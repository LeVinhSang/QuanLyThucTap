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
     * @return {string}
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
     * @return {int|*}
     */
    getPhone() {
        return this.phone;
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
     * @param {int} phone
     */
    setPhone(phone) {
        this.phone = phone;
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
     * @param {string} address
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

    /**
     *
     * @return {string|*}
     */
    getGender() {
        return this.gender;
    }

    /**
     *
     * @param {string} gender
     */
    setGender(gender) {
        this.gender = gender;
    }

}

module.exports = CompanyManager;
