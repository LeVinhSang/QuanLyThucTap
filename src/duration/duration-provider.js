const connection                    = require('../../database/knex-connection');
const DurationFactory               = require('./duration-factory');
const Duration                      = require('./duration');

let durationFactory                 = new DurationFactory();

class DurationProvider {

    /**
     *
     * @param connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     *
     * @param id
     * @return {Duration}
     */
    provide (id) {
        return connection('durations').select()
            .where({id : id})
            .then(results => {
                return durationFactory.make(results[0])
            });
    }
}

module.exports = DurationProvider;