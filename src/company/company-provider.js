const CompanyFactory = require('./company-factory');

let companyFactory = new CompanyFactory();

class CompanyProvider {
    constructor(connection) {
        this.connection = connection;
    }

    provide(id) {
        return this.connection
            .select()
            .from('company')
            .where({ id : id }).then(result => {
                return companyFactory.makeFromDB(result[0]);
            })
    }
}

module.exports = CompanyProvider;