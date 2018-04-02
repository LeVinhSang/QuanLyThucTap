class InternShipRepository {
    constructor(connection) {
        this.connection = connection;
    }

    addInternShip(internship) {
        return this.connection.from('internship').insert({
            duration      : internship.getDuration(),
            list          : internship.getList(),
            companyManager: internship.getCompanyManager()
        })
    }

    editInternShip(internship){
        return this.connection.from('internship').update({
            duration : internship.getDuration(),
            list     : internship.getList(),
            companyManager: internship.getCompanyManager()
        })
    }

}

module.exports = InternShipRepository;