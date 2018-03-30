const Intern = require('./intern');

class InternFactory {
    
    makeFromRequest(internRaw) {
        let intern = new Intern(internRaw.code);
        intern.setId(internRaw.id);
        intern.setName(internRaw.name);
        intern.setPhone(internRaw.phone);
        intern.setEmail(internRaw.email);
        intern.setSex(internRaw.sex);
        intern.setAddress(internRaw.address);
        return intern;
    }
}

module.exports = InternFactory;
