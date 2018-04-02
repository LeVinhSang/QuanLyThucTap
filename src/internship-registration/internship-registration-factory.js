const InterShipRegistration = require('../internship/internship-registration');


class InternshipRegistrationFactory {
    make(internshipRegistration) {
        let internShipRegistration;
        internShipRegistration= new InterShipRegistration(internshipRegistration.intern,
            internshipRegistration.internship, internshipRegistration.status);
        return internShipRegistration;

    }
}

module.exports = InternshipRegistrationFactory;