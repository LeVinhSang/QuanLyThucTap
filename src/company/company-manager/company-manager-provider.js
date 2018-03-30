const CompanyManagerFactory = require('./company-manager-factory');
class CompanyManagerRepository {
    constructor(connection) {
        this.connection = connection;
    }
    searchByCompany(id) {
        let companyManagerFactory = new CompanyManagerFactory();
        return this.connection('companyManager').where({company_id :id, deleted_at: null})
            .then(companyManager => companyManagerFactory.makeFromDB(companyManager[0]))
    }
}
module.exports = CompanyManagerRepository;