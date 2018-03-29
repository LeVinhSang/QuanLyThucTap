class InternshipRepository {

    constructor(connection) {
        this.connection = connection;
    }

    all() {
        return this.connection.select().from('internship');
    }
}