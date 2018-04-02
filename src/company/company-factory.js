const Company = require('./company');

class CompanyFactory {

    makeFromDB(rawData) {
        let company = new Company(rawData.manager);
        company.setId(rawData.id);
        company.setAddress(rawData.address);
        company.setPhone(rawData.phone);
        company.setName(rawData.name);
        return company;
    }
}

module.exports = CompanyFactory;
