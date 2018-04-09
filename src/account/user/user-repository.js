class UserRepository {

    constructor(connection, hash) {
        this.connection = connection;
        this.hash       = hash;
    }

    getUser(user){
        return this.connection('users').where({name : user.getName()})
            .then(function(userRawData){
                return !userRawData.length;
            });
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
