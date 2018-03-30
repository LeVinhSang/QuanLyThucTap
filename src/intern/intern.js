class Intern {

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
     * @param id
     * @return {int|*}
     */
    getId(id) {
        return this.id;
    }

    /**
     *
     * @param {int} code
     */
    setCode(code) {
        this.code = code;
    }

    /**
     *
     * @return {*}
     */
    getCode() {
        return this.code;
    }

    /**
     *
     * @param gender
     */
    setGender(gender) {
        this.gender = gender;
    }

    getGender() {
        return this.gender;
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
     * @param  lecturer_id
     */
     setLecturer(lecturer_id) {
        this.lecturer_id = lecturer_id;
     }

    /**
     *
     * @return {*}
     */
     getLecturer() {
         return this.lecturer_id;
     }

    /**
     *
     * @param company_id
     */
    setCompany(company_id) {
         this.company_id = company_id;
     }

    /**
     *
     * @return {*}
     */
    getCompany() {
         return this.company_id;
    }
}

module.exports = Intern;
