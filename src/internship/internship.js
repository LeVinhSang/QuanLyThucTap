class Internship {

    /**
     * 
     * @param{string} duration
     * @param {InternList} internList
     * @param {CompanyManager} companyManager
     * @param {string} status
     */
    constructor(duration, internList, companyManager, status) {
        this.duration = duration;
        this.internList = internList;
        this.companyManager = companyManager;
        this.status = status;
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
     * @return {string|*}
     */
    getStatus() {
        return this.status;
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
