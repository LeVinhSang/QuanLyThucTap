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
            gender: intern.getGender(),
            status: status.PENDING
        });
    }

    /**
     *
     * @param {Intern} intern
     * @return {Promise <void>}
     */
    edit(intern) {
        return this.connection('interns').update({
            code: intern.getCode(),
            name: intern.getName(),
            images: intern.getImages(),
            phone: intern.getPhone(),
            email: intern.getEmail(),
            address: intern.getAddress(),
            gender: intern.getGender()
        }).where({
            id: intern.getId()
        });
    }


    /**
     *
     * @param {int} id
     * @return {Promise <void>}
     */
    delete(id) {
        return this.connection('interns').update({
           status: status.FINISHED
        }).where({id: id});
    }

    /**
     *
     * @param {int} id
     * @return {Promise <void>}
     */
    confirm(id) {
        return this.connection('interns').update({
            status: status.DOING
        }).where({id: id});
    }
}

module.exports = InternRepository;
