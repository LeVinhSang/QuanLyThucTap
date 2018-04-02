class Duration {

    /**
     *
     * @param {string} startDate
     * @param {string} endDate
     */
    constructor(startDate, endDate) {
        this.starDate = startDate;
        this.endDate  = endDate;
    }

    /**
     *
     * @return {date|*}
     */
    getStartDate() {
        return this.starDate;
    }

    /**
     *
     * @return {date|*}
     */
    getEndDate() {
        return this.endDate;
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
        this.id = id;
    }

}

module.exports = Duration;
