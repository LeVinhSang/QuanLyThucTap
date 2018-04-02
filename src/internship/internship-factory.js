const InternShip = require('./internship');

class InternShipFactory  {
    /**
     *
     * @param internShipRawData
     * @return {InternShip|Internship}
     */
    makeFromRequest(internShipRawData) {
        let internship;
        internship = new InternShip(internShipRawData.duration,
            internShipRawData.internShipList,
            internShipRawData.companyManager);
        return internship;
    }
}

module.exports = InternShipFactory;
