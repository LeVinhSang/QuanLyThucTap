class LecturerSystem {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Lecturer} lecturer
     * @return {Promise <void> }
     */
    add(lecturer) {
        return this.connection('lecturers').insert({
            code: lecturer.getCode(),
            name: lecturer.getName(),
            gender: lecturer.getGender(),
            phone: lecturer.getPhone(),
            email: lecturer.getEmail(),
            address: lecturer.getAddress()
        });
    }

    /**
     *
     * @param {Lecturer} lecturer
     * @return {Promise <void> }
     */
    edit(lecturer) {
        this.connection('lecturers').update({
            code: lecturer.getCode(),
            name: lecturer.getName(),
            sex: lecturer.getGender(),
            phone: lecturer.getPhone(),
            email: lecturer.getEmail(),
            address: lecturer.getAddress()
        }).where({id: lecturer.getId()})
    }

    remove(id) {
        this.connection('lecturers').update({
            deleted_at: new Date()
        }).where({id: id});
    }
}

module.exports = LecturerSystem;
