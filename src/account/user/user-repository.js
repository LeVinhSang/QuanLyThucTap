class UserRepository {

    constructor(connection, userFactory) {
        this.connection = connection;
        this.userFactory = userFactory;
    }

    get(id){
        return this.connection('users').where({id:id})
            .then((userRawData) => {
                return this.userFactory.makeFromDB(userRawData);
            });
    }

    getByUserName(userName){
        return this.connection('users').where({user_name: userName})
            .then((userRawData) => {
                return this.userFactory.makeFromDB(userRawData);
            })
    }

    add(user) {
        return this.connection('users')
            .insert({
                name: user.getName(),
                password: user.getPassword(),
                role: user.getRole()
            })
            .then(function () {
                return "";
            });
    }
}

module.exports = UserRepository;
