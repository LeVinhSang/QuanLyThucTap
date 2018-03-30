class Duration {
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate   = endDate;
    }

    /**
     *
     * @return {*}
     */
    getStartDate() {
        return this.startDate;
    }

    /**
     *
     * @return {*}
     */
    getEndDate() {
        return this.endDate;
    }
}

module.exports = Duration;
