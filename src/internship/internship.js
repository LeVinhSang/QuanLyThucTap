class Internship {
    /**
     *
     * @param {InternShipList} internShipList
     * @param {Company} company
     */
    constructor(duration,internShipList, company) {
        this.internShipList = internShipList;
        this.company = company;
        this.duration       = duration;
    }
    /**
     *
     * @return {InternshipList}
     */
    getInternShipList () {
        return this.internShipList ;
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
     * @return {int}
     */
    getId() {
        return this.id;
    }
    /**
     *
     * @return {CompanyManager}
     */
    getCompany() {
        return this.company;
    }
    getDuration() {
        return this.duration;
    }
}

module.exports = Internship;