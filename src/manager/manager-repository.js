class ManagerRepository {
    constructor(connection) {
        this.connection = connection;
    }

    addManager(manager) {
        return this.connection.from('manager').where({
            name : manager.getName(),
            phone : manager.getPhone(),
        })
    }

    editManager(manager) {
        return this.connection.from('manager').where({
            id      : manager.getId(),
            name    : manager.getName(),
            phone   : manager.getPhone()
        })
    }
}

module.exports = ManagerRepository;