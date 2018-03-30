const InternShipList = require('')
class InternshipRepository {

    /**
     *
     * @param {Connection} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    all() {
        this.connection('internship').where({deleted_at : null});
    }
    remove(id) {
        this.connection('internship').where('id', id);
    }
    create(intern, internShip) {

    }
    seachByCourse(Cuorse_id) {
        return this.connection('internShip').where({course_id : Cuorse_id, deleted_at: null}).then(internShips => {

        })
    }
}