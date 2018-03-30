const CompanyManager = require('./company-manager');
const Contact = require('../../../src/contact/contact');
class CourseFactory {

    /**
     *
     * @param raw
     * @return {CompanyManager}
     */
    makeFromDB(raw) {
        let companyManager = new CompanyManager(raw.managerName);
        companyManager.setId(raw.managerId);
        companyManager.setAddress(raw.managerAddress);
        let contact = new Contact();
        contact.setPhone(raw.managerPhone);
        contact.setEmail(raw.managerEmail);
        companyManager.setContact(contact);
        return companyManager;
    }
}
module.exports = CourseFactory;