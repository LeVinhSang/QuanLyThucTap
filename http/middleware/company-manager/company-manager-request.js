const CompanyManagerFactory = require('../../../src/company-manager/company-manager-factory');

let companyManagerFactory   = new CompanyManagerFactory();

let companyManagerRequest = (req, res, next) => {

    companyManagerFactory.makeFromRequest(req.body)
        .then( (companyManager) => {
            companyManager.setId(req.params.id);
            req.companyManager = companyManager;
            next();
        });
};

module.exports = companyManagerRequest;
