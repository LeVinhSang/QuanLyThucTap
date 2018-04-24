const status = require('./intern-statuses');

class InternRepository {

    /**
     *
     * @param connection
     */
    constructor(connection, internFactory) {
        this.connection    = connection;
        this.internFactory = internFactory;
    }

    /**
     *
     * @param {Intern} intern
     */
    add(intern) {
        return this.connection('interns').insert({
            code: intern.getCode(),
            name: intern.getName(),
            phone: intern.getPhone(),
            email: intern.getEmail(),
            address: intern.getAddress(),
            gender: intern.getGender(),
            status: status.PENDING
        }).then(() => this.internFactory.makeFromDB(intern));
    }

    /**
     *
     * @param {Intern} intern
     * @return {*}
     */
    edit(intern) {
        return this.connection('interns').update({
            code: intern.getCode(),
            name: intern.getName(),
            phone: intern.getPhone(),
            email: intern.getEmail(),
            address: intern.getAddress(),
            gender: intern.getGender()
        }).where({
            id: intern.getId()
        });
    }

    remove(id) {
        return this.connection('interns').update({
           status: status.FINISHED
        }).where({id: id});
    }

    detail(id) {
        return this.connection('interns').where({id : id})
            .then((internRawData) => this.internFactory.makeFromDB(internRawData));
    }

    confirm(id) {
        return this.connection('interns').update({
            status: status.DOING
        }).where({id: id});
    }
}

module.exports = InternRepository;
