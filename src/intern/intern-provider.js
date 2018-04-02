const connection        = require('../../database/knex-connection');
const InternFactory     = require('./intern-factory');
const Intern            = require('./intern');

let internFactory    = new InternFactory();

class InternProvide {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param id
     * @return {Intern[]}
     */
    provide (id) {
        return connection.select()
            .from('companies')
            .where({id : id})
            .then(results => internFactory.make(results[0]));
    }
}

module.exports = InternProvide;
