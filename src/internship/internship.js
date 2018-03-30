class Internship {

    /**
     *
     * @param {Duration}  duration
     * @param {InternshipList} internshipList
     * @param {CompanyManager} companyManager
     */
    constructor(duration, internshipList, companyManager) {
        this.duration       = duration;
        this.internShipList = internshipList;
        this.companyManager = companyManager;
    }

    /**
     *
     * @return {*}
     */
    getList() {
        return this.internShipList;
    }

    /**
     *
     * @return {*}
     */
    getDuration() {
        return this.duration;
    }

    /**
     *
     * @return {*}
     */
    getCompanyManager() {
        return this.companyManager;
    }
}

module.exports = Internship;
