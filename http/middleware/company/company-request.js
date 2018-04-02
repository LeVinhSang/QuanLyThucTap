const CompanyFactory = require('../../../src/company/company-factory');

let companyFactory = new CompanyFactory();

module.exports = function (request, response, next) {
    companyFactory.makeFromDB(request.body).then(result => {
        result.manager(request.body.manager);
        request.result = result;
        next();
    })
};