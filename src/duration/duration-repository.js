class DurationRepository {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Duration} duration
     */
    add(duration) {
        return this.connection('durations').insert({
            start_date: duration.getStartDate(),
            end_date: duration.getEndDate()
        });
    };
    
    edit(duration) {
        return this.connection('durations').update({
            start_date: duration.getStartDate(),
            end_date: duration.getEndDate()
        }).where({id: duration.getId()})
    }
 
}

module.exports = DurationRepository;
