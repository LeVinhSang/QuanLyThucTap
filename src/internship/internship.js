class Internship {
    constructor(duration, internshipList, companyManager) {
        this.duration = duration;
        this.internShipList = internshipList;
        this.companyManager = companyManager;
    }

    /**
     *
     * @return {Duration}
     */
    getDuration() {
        return this.duration;
    }

    /**
     *
     * @return {Internship}
     */
    getList() {
        return this.internShipList;
    }

    /**
     *
     * @return {CompanyManager}
     */
    getCompananyManager() {
        return this.companyManager;
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
        this.id =id;
    }
}

module.exports = Internship;
