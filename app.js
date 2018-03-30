const express                   = require('express');
const bodyParser                = require('body-parser');
const app                       = express();
const InternRepository          = require('./src/intern/intern-repository');
const LecturerSystem            = require('./src/lecturer/lecturer-system');
const CompanyRepository         = require('./src/company/company-repository');
const CompanyManagerSystem      = require('./src/company-manager/company-manager-system');
const knex                      = require('./database/knex-connection');
const router                    = require('./router/router');

app.set('intern.repo', new InternRepository(knex));
app.set('lecturer.repo', new LecturerSystem(knex));
app.set('company.repo', new CompanyRepository(knex));
app.set('company-manager.repo', new CompanyManagerSystem(knex));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);

app.listen(8080, () => {
    console.log('sever running...!');
});