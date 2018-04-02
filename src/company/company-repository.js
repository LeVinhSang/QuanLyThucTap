class CompanyRepository {
    constructor(connection) {
        this.connection = connection;
    }

    addCompany(company) {
        return this.connection.select().from('company').insert({
            manager : company.getManager(),
            address : company.getAddress(),
            phone   : company.getPhone(),
            name    : company.getPhone()
        })
    }

    editCompany(company) {
        return this.connection.select().from('company').update({
            id      : company.getId(),
            manager : company.getManager(),
            address : company.getAddress(),
            phone   : company.getPhone(),
            name    : company.getName()
        })
    }
}

module.exports = CompanyRepository;