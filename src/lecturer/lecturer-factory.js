const Lecturer = require('./lecturer');

class LecturerFactory {

    makeFromRequest(lecturerRaw) {
        let lecturer = new Lecturer(lecturerRaw.code);
        lecturer.setId(lecturerRaw.id);
        lecturer.setName(lecturerRaw.name);
        lecturer.setPhone(lecturerRaw.phone);
        lecturer.setEmail(lecturerRaw.email);
        lecturer.setGender(lecturerRaw.gender);
        lecturer.setAddress(lecturerRaw.address);
        return lecturer;
    }
}

module.exports = LecturerFactory;
