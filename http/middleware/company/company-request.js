const CompanyFactory = require('../../../src/company/company-factory');

let companyFactory   = new CompanyFactory();

let companyRequest = (req, res, next) => {
    req.company = companyFactory.makeCompany(req.body);
    req.company.setId(req.params.id);
    next();
};

module.exports = companyRequest;
