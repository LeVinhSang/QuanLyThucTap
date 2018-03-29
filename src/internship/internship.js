class Internship {
    constructor(duration, internshipList, companyManager) {
        this.duration = duration;
        this.internShipList = internshipList;
        this.companyManager = companyManager;
    }

    getList() {
        return this.internShipList;
    }
}

module.exports = Internship;
