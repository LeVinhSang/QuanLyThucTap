const CompanyManager  = require('./company-manager');
const CompanyProvider = require('../company/company-provider');

let companyProvider   = new CompanyProvider();

class CompanyFactory {

    makeFromRequest(companyManagerRaw) {

        return companyProvider.provide(companyManagerRaw.company_id)
            .then(company => {
                let companyManager = new CompanyManager(company, companyManagerRaw.name);
                companyManager.setPhone(companyManagerRaw.phone);
                companyManager.setEmail(companyManagerRaw.email);
                companyManager.setGender(companyManagerRaw.gender);
                companyManager.setAddress(companyManagerRaw.address);
                return companyManager;
            });
    }

    /**
     *
     * @param companyManagerRaw
     * @return {CompanyManager}
     */
    makeFromDB(companyManagerRaw) {
        companyProvider.provide(companyManagerRaw.company_id)
            .then(company => {
                let companyManager = new CompanyManager(company, companyManagerRaw.name);
                companyManager.setId(companyManagerRaw.id);
                companyManager.setPhone(companyManagerRaw.phone);
                companyManager.setEmail(companyManagerRaw.email);
                companyManager.setGender(companyManagerRaw.gender);
                companyManager.setAddress(companyManager.address);
                return companyManager;
            });
    }
}

module.exports = CompanyFactory;
