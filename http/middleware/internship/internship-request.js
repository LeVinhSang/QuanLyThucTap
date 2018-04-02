const InternshipFactory = require('../../../src/internship/internship-factory');

let internshipFactory   = new InternshipFactory();

let internshipRequest = (req, res, next) => {
    internshipFactory.makeFromRequest(req.body)
        .then( (internship) => {
            console.log(internship);
            req.internship = internship;
            req.internship.setId(req.params.id);
            next();
        });
};

module.exports = internshipRequest;
