class IsIntern {
    constructor(connection) {
        this.connection = connection;
    }

    checkIntern(id) {
        return this.connection.from('intern').where({ id: id});
    }
}
module.exports = IsIntern;
