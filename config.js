require('dotenv').config();

module.exports = {
    services : [],

    database : {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'intern_management'
        }
    },

    http : {
        port : process.env.PORT || 3000
    }
};