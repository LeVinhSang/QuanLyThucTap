const UserRepository = require('../user/user-repository');
const AuthSession    = require('./authen-session');
module.exports = function(app){
    app.set('authSession', new AuthSession(new UserRepository(app.get('databaseConnection'))));
};

