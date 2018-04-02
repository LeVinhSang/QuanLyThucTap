const InternShipFactory = require('./internship-factory');
const connection = require('../../database/knex-connection');

let internshipfactory = new InternShipFactory;

class InternShipProvider {
    /**
     *
     * @param {connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }
    provide(id) {
        return this.connection.select().from('internship').where({ id:id}).then(result => {
            return new internshipfactory.makeFromRequest(result[0]);
        })
    }
}

module.exports = InternShipProvider;