const Company = require('./company');
const Contact = require('../../src/contact/contact');
class CourseFactory {

    /**
     *
     * @param raw
     * @return {Company}
     * @param companyManager
     */
    makeFromDB(raw,companyManager) {
        let company = new Company(raw.name);
        company.setId(raw.id);
        company.setAddress(raw.address);
        company.setCompanyManager(companyManager);
        let contact = new Contact();
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        company.setContact(contact);
        return company;
    }
}
module.exports = CourseFactory;