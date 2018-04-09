const User = require('./user');

class UserFactory {

    makeFromDB(userRawData) {
        let user = new User(userRawData.user_name, userRawData.password);
        user.setId(userRawData.id);
        user.setRole(userRawData.role);
        return user;
    }
}