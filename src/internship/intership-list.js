class InternshipList {

    /**
     * @param {Connection} connection
     * @param {Lecturer}lecturer
     * @param interns
     */
    constructor(connection,lecturer, intern) {
        this.connection = connection;
        this.lecturer = lecturer;
        this.intern = intern;
    }
    addIntern(intern) {
        this.connection('registrations').insert({
            intern_id : intern.getId(),

        })
    }

}

module.exports = InternshipList;
