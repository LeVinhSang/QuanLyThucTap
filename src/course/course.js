class Course {
    /**
     *
     * @param {Duration} duration
     * @param {string} status
     */
    constructor(duration, status) {
        this.duration = duration;
        this.status = status;
    }

    /**
     *
     * @return {Duration|*}
     */
    getDuration() {
        return this.duration;
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
     * @return {string|*}
     */
    getInfo() {
        return this.info;
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
     * @param {string} info
     */
    setInfo(info) {
        this.info = info;
    }
}

module.exports = Course;



/*
// internship

me
internship.getList().addIntern(me);*/
