const Manager = require('./manager');

class ManagerFactory {
    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    makeFromRequest(managerRawData) {
        let manager = new Manager(managerRawData.name);
        manager.setId(managerRawData.id);
        manager.setPhone(managerRawData.phone);
    }
}

module.exports = ManagerFactory;