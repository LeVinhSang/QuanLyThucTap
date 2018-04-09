const userRole = require('../user/user-role');
class ConfirmRegistrationPolicy {

    check(user, course) {
        return user.getRole() === userRole.LECTURER;
    }
}

module.export = ConfirmRegistrationPolicy;
