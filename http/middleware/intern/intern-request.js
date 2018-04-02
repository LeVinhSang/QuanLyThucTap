const InternFactory = require('../../../src/intern/intern-factory');

let internFactory   = new InternFactory();

let internRequest = (req, res, next) => {
    req.intern = internFactory.make(req.body);
    req.intern.setId(req.params.id);
    next();
};

module.exports = internRequest;
