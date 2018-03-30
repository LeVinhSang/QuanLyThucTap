const intern = require('../intern/intern');
class InternshipRepository {

    constructor(knex) {
        this.knex = knex;
    }

    /**
     *
     * @return {*}
     */
    all() {
        return this.knex.from('intern').where({ deleted_at : null});
    }

    /**
     *
     * @param {Intern} intern
     * @return {Promise <void>}
     */
    addIntern(intern){
        return this.knex.from('intern').insert({
            name        : intern.getName(),
            code        : intern.getCode(),
            gender      : intern.getGender(),
            phone       : intern.getPhone(),
            address     : intern.getAddress(),
            lecturer_id : intern.getLecturer().getId(),
            company_id  : intern.getCompany().getId()

        }).where({
            deleted_at : null
        })
    }

    /**
     *
     * @param {Intern} intern
     * @return {Promise <void>}
     */
    editIntern(intern) {
        return this.knex.from('intern').update({
            name       : intern.getName(),
            code       : intern.getCode(),
            phone      : intern.getPhone(),
            address    : intern.getAddress(),
        }). where ({
            deleted_at : null
        })
    }

    /**
     *
     * @param {int} id
     * @return {*}
     */
    removeIntern(id) {
        return this.knex.from('intern').update({
            deleted_at : new Date().toLocaleString()
        }). where ({
            id : id
        })
    }
}

module.exports = InternshipRepository;