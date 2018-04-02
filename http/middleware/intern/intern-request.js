const InternFactory = require('../../../src/intern/intern-factory');
let internFactory = new InternFactory();

module.exports = function (request, response, next) {
    internFactory.makeFromRequest(request.body)
        .then(intern => {
            intern.setId(request.params.id);
            request.intern = intern;
            next();
        });
};