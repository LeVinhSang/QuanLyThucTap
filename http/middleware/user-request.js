const UserFactory = require('../../src/user/userFactory');

let   userFactory = new UserFactory();

module.exports = (req, res, next) => {

    userFactory.makeFromRequest(req.body)
        .then( (user) => {
            req.user = user;
            next();
        })
};