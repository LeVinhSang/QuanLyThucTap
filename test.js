let express = require('express');

let app = express();
const knex = require('./database/knex-connection');
/*
const IntenrShip = require('./src/internship-registration/internship-registration-repository');
const InternShipRegistrationService = require('./src/internship-registration/internship-registration-service');
const InternShipRegistration = require('./src/internship/internship-registration');
*/

/*let internRepo = new  IntenrShip(knex);
let internShipRegistrationService = new InternShipRegistrationService(knex);
internRepo.all().then(console.log);

function abc() {
    let intern = knex('intern').where('id',1).then(result=>result);
    let internShip = knex('internShip').where('id',1);
    let internShipRegistration = new  InternShipRegistration(intern.internship, );
    Promise.all([intern, internShip]).then(result => {
        internShipRegistrationService.send()
    })
}
abc().then(result=> {

});*//*
const  LecturerRepo = require('./src/lecturer/lecture-reponsiroty');

let lec = new  LecturerRepo(knex);

lec.search(1).then(console.log);*/

const CompanyRepository = require('./src/company/company-provider');
 let com = new  CompanyRepository(knex);
 com.searchById(1).then(console.log);
/*const Cuorse = require('./src/course/course-reponsitory');
let course = new Cuorse(knex);
course.all().then(console.log);*/
app.listen(8080);