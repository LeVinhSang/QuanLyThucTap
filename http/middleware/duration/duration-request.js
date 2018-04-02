const DurationFactory = require('../../../src/duration/duration-factory');

let durationFactory   = new DurationFactory();

module.exports = (req, res, next) => {
    req.duration = durationFactory.make(req.body);
    req.duration.setId(req.params.id);
    next();
};
