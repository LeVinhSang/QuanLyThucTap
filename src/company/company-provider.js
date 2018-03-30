const CompanyManagerFactory= require('./company-manager/company-manager-factory');
const CompanyFactory = require('./company-factory');

class CompanyRepository {
    constructor(connection) {
        this.connection = connection;
    }
    searchById(id) {
        let companyFactory = new CompanyFactory();
        let companyManagerFactory = new CompanyManagerFactory();
        return this.connection
            .select('company.id', 'company.name', 'company.address', 'company.phone', 'company.email',
                'companyManager.name as managerName','companyManager.sex as managerSex',
                'companyManager.address as managerAddress', 'companyManager.phone as managerPhone',
                'companyManager.id as managerId', 'companyManager.email as managerEmail')
            .from('company')
            .leftJoin('companyManager', function() {
                this.on('company.id', '=', 'companyManager.company_id')
            }).where({'company.id' : id}).then(result => {
                let companyFac        = companyFactory.makeFromDB(result[0]);
                let companyManagerFac = companyManagerFactory.makeFromDB(result[0]);
                return Promise.all([companyFac, companyManagerFac]);
            });
    }
}
module.exports = CompanyRepository;