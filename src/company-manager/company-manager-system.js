class CompanyManagerSystem {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {CompanyManager} companyManager
     * @return {Promise <void> }
     */
    add(companyManager) {
        return this.connection('company_managers').insert({
            name: companyManager.getName(),
            phone: companyManager.getPhone(),
            company_id: companyManager.getCompany().getId(),
            gender: companyManager.getGender(),
            email: companyManager.getEmail(),
            address: companyManager.getAddress()
        });
    }

    edit(companyManager) {
        return this.connection('company_managers').update({
            name: companyManager.getName(),
            phone: companyManager.getPhone(),
            company_id: companyManager.getCompany().getId(),
            gender: companyManager.getGender(),
            email: companyManager.getEmail(),
            address: companyManager.getAddress()
        }).where({id: companyManager.getId()});
    }
}

module.exports = CompanyManagerSystem;
