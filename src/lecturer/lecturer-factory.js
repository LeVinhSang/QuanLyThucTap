const Lecturer = require('./lecturer');
class LecturerFactory {
    makeFromRequest(lecturerRawData) {
        let lecturer = new Lecturer(lecturerRawData.name);
        lecturer.setId(lecturerRawData.id);
        lecturer.setAddress(lecturerRawData.address);
        lecturer.setPhone(lecturer.phone);
        return lecturer;
    }
}
module.exports = LecturerFactory;