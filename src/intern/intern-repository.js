class InternRepository {
    constructor(connection){
        this.connection = connection;
    }

    addIntern(intern) {
        return this.connection.select().from('intern').insert({
            name        : intern.getName(),
            code        : intern.getCode(),
            address     : intern.getAddress(),
            gender      : intern.getGender(),
            company_id  : intern.getCompany(),
            lecturer_id : intern.getLecturer(),
        }).where({deleted_at: null })
    }

    editIntern(intern) {
        return this.connection.select().from('intern').update({
            id          : intern.getId(),
            name        : intern.getName(),
            code        : intern.getCode(),
            address     : intern.getAddress(),
            gender      : intern.getGender(),
            company_id  : intern.getCompany(),
            lecturer_id : intern.getLecturer()
        }).where({deleted_at:null})
    }

    removeIntern() {
        return this.connection.select().from('intern').update({
            deleted_at : new Date().toLocaleString()
        })
    }
}

module.exports = InternRepository;