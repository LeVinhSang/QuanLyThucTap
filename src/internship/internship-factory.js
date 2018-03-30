const InternShip = require('../../src/internship/internship');

class InternShipFactory {

    /**
     *
     * @param raw
     * @return {InternShip}
     */
    makeFromDB(raw) {
        let internShip = new InternShip(raw.);
        interns.setSex(raw.sex);
        let contact = new  Contact();
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        intern.setContact(contact);
        return intern;
    }
}
module.exports = InternShipFactory;