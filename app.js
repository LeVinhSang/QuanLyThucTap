const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const UserRepository = require('./auth/login/user-system');
const InternRepository = require('./src/intern/intern-repository');
const knex           = require('./database/knex-connection');
const router         = require('./router/router');

app.set('users.repo', new UserRepository(knex));
app.set('intern.repo', new InternRepository(knex));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);

app.listen(8080, () => {
    console.log('sever running...!');
});