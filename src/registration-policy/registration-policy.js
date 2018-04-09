const userRole     = require('../user/user-role');
const courseStatus = require('../course/course-status');

class RegistrationPolicy {

    check(user, course) {
        return user.getRole() === userRole.STUDENT &&
            course.getStatus()=== courseStatus.OPEN;
    }
}

module.exports = RegistrationPolicy;
