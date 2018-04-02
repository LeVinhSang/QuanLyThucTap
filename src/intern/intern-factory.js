const Intern = require('./intern');
class InternFactory {
    makeFromRequest(internRawData) {
        let intern = new Intern(internRawData.name);
        intern.setId(internRawData.id);
        intern.setCode(internRawData.code);
        intern.setPhone(internRawData.phone);
        intern.setAddress(internRawData.address);
        intern.setGender(internRawData.gender);
        intern.setCompany(internRawData.company_id);
        intern.setLecturer(internRawData.lecturer_id);
        return intern;
    }
}
module.exports = InternFactory;
