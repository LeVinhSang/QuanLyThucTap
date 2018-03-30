const Intern = require('../../src/intern/intern');
const Contact = require('../../src/contact/contact');
class InternFactory {

    /**
     *
     * @param raw
     * @return {Intern}
     */
    makeFromDB(raw) {
        let intern = new Intern(raw.name);
        intern.setSex(raw.sex);
        let contact = new  Contact();
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        intern.setAddress(raw.address);
        intern.setContact(contact);
        return intern;
    }
}
module.exports = InternFactory;