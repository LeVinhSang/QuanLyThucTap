const Lecturer = require('../../src/lecturer/lecturer');
const Contact = require('../../src/contact/contact');
class lecturerFactory {

    /**
     *
     * @param raw
     * @return {Lecturer}
     */
    makeFromDB(raw) {
        let lecturer = new Lecturer(raw.id);
        lecturer.setName(raw.name);
        lecturer.setSex(raw.sex);
        let contact = new  Contact();
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        lecturer.setContact(contact);
        lecturer.setAddress(raw.address);
        return lecturer;
    }
}
module.exports = lecturerFactory;