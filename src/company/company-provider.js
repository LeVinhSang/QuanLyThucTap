const connection        = require('../../database/knex-connection');
const CompanyFactory  = require('./company-factory');
const Company         = require('./company');

let companyFactory    = new CompanyFactory();

class CompanyProvide {

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
     * @return {Company[]}
     */
    provide (id) {
        return connection.select()
            .from('companies')
            .where({id : id})
            .then(results => companyFactory.makeCompany(results[0]));
    }
}

module.exports = CompanyProvide;