const status = require('./intern-statuses');

class InternRepository {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
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
            sex: intern.getSex(),
            status: status.PENDING
        });
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
            sex: intern.getSex()
        }).where({
            id: intern.getId()
        });
    }

    remove(id) {
        return this.connection('interns').update({
           status: status.FINISHED
        }).where({id: id});
    }

    confirm(id) {
        return this.connection('interns').update({
            status: status.DOING
        }).where({id: id});
    }
}

module.exports = InternRepository;
