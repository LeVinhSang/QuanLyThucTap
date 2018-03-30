class InternshipRepository {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Internship} internship
     * @return {Promise <void> }
     */
    add(internship) {
        return this.connection('internships').insert({
            duration_id: internship.getDuration().getId(),
            company_manager_id: internship.getCompanyManager().getId()
        });
    }
}

module.exports = InternshipRepository;
