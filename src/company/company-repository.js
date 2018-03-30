class CompanyRepository {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param {Company} company
     * @return {Promise <void> }
     */
    add(company) {
        return this.connection('companies').insert({
            name: company.getName(),
            phone: company.getPhone(),
            email: company.getEmail(),
            address: company.getAddress()
        });
    }

    /**
     *
     * @param {Company} company
     * @return {Promise <void> }
     */
    edit(company) {
        return this.connection('companies').update({
            name: company.getName(),
            phone: company.getPhone(),
            email: company.getEmail(),
            address: company.getAddress()
        }).where({id: company.getId()});
    }
}

module.exports = CompanyRepository;
