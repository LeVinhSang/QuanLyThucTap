const InternFactory = require('./intern-factory');

let internFactory = new InternFactory();

class InternProvide {
    constructor(connection) {
        this.connection = connection;
    }

    provide(id) {
        return this.connection.select()
            .from('intern')
            .where({ id :id}).then(result => {
                internFactory.makeFromRequest(result[0]);
            })
    }
}

module.exports = InternProvide;