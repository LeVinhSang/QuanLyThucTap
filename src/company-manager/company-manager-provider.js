const connection             = require('../../database/knex-connection');
const CompanyManagerFactory  = require('./company-manager-factory');
const CompanyManager         = require('./company-manager');

let companyManagerFactory    = new CompanyManagerFactory();

class CompanyManagerProvide {

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
     * @return {CompanyManager[]}
     */
    provide (id) {
        return connection.select()
            .from('companies')
            .where({id : id})
            .then(results => companyManagerFactory.makeFromDB(results[0]));
    }
}

module.exports = CompanyManagerProvide;