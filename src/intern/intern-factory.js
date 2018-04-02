const Intern = require('./intern');

class InternFactory {
    
    make(internRaw) {
        let intern = new Intern(internRaw.code);
        intern.setId(internRaw.id);
        intern.setName(internRaw.name);
        intern.setImages(internRaw.images);
        intern.setPhone(internRaw.phone);
        intern.setEmail(internRaw.email);
        intern.setGender(internRaw.gender);
        intern.setAddress(internRaw.address);
        return intern;
    }
}

module.exports = InternFactory;
