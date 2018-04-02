class LecturerFactory {
    constructor(connection) {
        this.connection = connection;
    }

    addLecturer(lecturer) {
        return this.connection.select().from('lecturer').insert({
            name    : lecturer.getName(),
            address : lecturer.getAddress(),
            phone   : lecturer.getPhone(),
        })
    }

    editLecturer(lecturer){
        return this.connection.select().from('lecturer').update({
            id      : lecturer.getId(),
            name    : lecturer.getName(),
            address : lecturer.getAddress(),
            phone   : lecturer.getPhone(),
        })
    }
}

module.exports = LecturerFactory;