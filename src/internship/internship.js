class Internship {
    constructor(duration, internshipList, companyManager) {
        this.duration = duration;
        this.internShipList = internshipList;
        this.companyManager = companyManager;
    }

    getInternShipList() {
        return this.internShipList;
    }

    getDuration() {
        return this.duration;
    }

    getCompanyManager() {
        return this.duration;
    }
}

module.exports = Internship;
