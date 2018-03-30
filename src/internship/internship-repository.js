class InternshipRepository {

    constructor(connecction) {
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
            status: internship.getCompanyManager().getId()
        });
    }
}