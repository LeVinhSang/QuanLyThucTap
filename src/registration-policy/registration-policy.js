const userRole     = require('../user/user-role');
const courseStatus = require('../course/course-status');

class RegistrationPolicy {

    canRegister(user, course) {
        return user.getRole() === userRole.STUDENT &&
            course.getStatus()=== courseStatus.OPEN &&
            user.getIntern().getStatus() === status.PENDING;
    }
}

module.exports = RegistrationPolicy;
