class Authenticator {

    constructor(userRepository, encoding) {
        this.userRepository = userRepository;
        this.encoding       = encoding;
    }

    logIn(user) {
        return this.userRepository.getUser(user)
            .then(function(userRawData){
                if(!userRawData[0]){
                    throw new Error('username not exist');
                }
                user.setId(userRawData[0].id);
                return this.encoding.compare(user.getPassword(), userRawData[0].passWord);
            })
            .then((isLogin) => {
                if(!isLogin) {
                    throw new Error('pass word fail!');
                }
                return user.getId();
            })
    }
}

module.exports = Authenticator;
