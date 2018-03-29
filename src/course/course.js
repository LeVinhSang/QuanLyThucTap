class Course {

    /**
     *
     * @param {string} info
     */
    constructor(info) {
        this.info = info;
    }

    /**
     *
     * @return {string}
     */
    getInfo() {
        return this.info;
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
    getStart_time() {
        return this.start_time;
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
     * @param {string} start_time
     */
    setStart_time(start_time) {
        this.start_time = start_time;
    }
}

module.exports = Course;
