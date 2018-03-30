class Course {
    /**
     * @param {InternShip[]} internShip
     * @param {Duration} duration
     */
    constructor(duration, internShip) {
        this.duration   = duration;
        this.internShip = internShip;
    }

    /**
     *
     * @return {InternShip[]}
     */
    getInternShip() {
        return this.internShip;
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
}

module.exports = Course;



//internship.getList().addIntern(me);