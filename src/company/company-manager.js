class CompanyManager {
    /**
     *
     * @param {Company} company
     */
    constructor(company) {
        this.conpany = company;
    }

    /**
     *
     * @return {Company|*}
     */
    getCompany() {
        return this.conpany;
    }

    /**
     *
     * @param name
     */
    setName(name) {
        this.name = name;
    }

    /**
     *
     * @return {*}
     */
    getName() {
        return this.name;
    }
}

module.exports = CompanyManager;
