const Intern = require('./intern');

class InternFactory {

    makeFromRequest(internRaw) {
        let intern = new Intern(internRaw.code);
        intern.setId(internRaw.id);
        intern.setName(internRaw.name);
        intern.setPhone(internRaw.phone);
        intern.setEmail(internRaw.email);
        intern.setGender(internRaw.gender);
        intern.setAddress(internRaw.address);
        return intern;
    }

    makeFromDB(internRawData) {
        let intern = new Intern(internRawData.code);
        intern.setId(internRawData.id);
    }
}

module.exports = InternFactory;
