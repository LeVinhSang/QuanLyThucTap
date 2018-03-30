const Company  = require('./company');

class CompanyFactory {
    makeCompany(companyRaw) {
        let company = new Company(companyRaw.name);
        company.setId(companyRaw.id);
        company.setPhone(companyRaw.phone);
        company.setEmail(companyRaw.email);
        company.setAddress(companyRaw.address);
        return company;
    }
}

module.exports = CompanyFactory;
