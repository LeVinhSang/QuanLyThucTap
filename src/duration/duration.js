class Duration {
    /**
     *
     * @param {Date} startDate
     * @param {Date} endDate
     */
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }

    /**
     *
     * @return {Date}
     */
    getStartDate() {
        return this.startDate;
    }

    /**
     *
     * @return {Date}
     */
    getEndDate() {
        return this.endDate;
    }
}

module.exports = Duration;
