class Internship {

    /**
     * 
     * @param{string} duration
     * @param {InternList} internList
     * @param {CompanyManager} companyManager
     */
    constructor(duration, internList, companyManager) {
        this.duration = duration;
        this.internList = internList;
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
        return this.internList;
    }

    /**
     *
     * @return {CompanyManager}
     */
    getCompanyManager() {
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
