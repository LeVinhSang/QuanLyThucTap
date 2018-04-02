const express                   = require('express');
const router                    = express.Router();
const InternController          = require('../http/controller/intern-controller');
const LecturerController        = require('../http/controller/lecturer-controller');
const CompanyController         = require('../http/controller/company-controller');
const CompanyManagerController  = require('../http/controller/company-manager-controller');
const DurationController        = require('../http/controller/duration-controller');
const CourseController          = require('../http/controller/course-controller');
// const InternshipController      = require('../http/controller/internship-controller');
const internRequest             = require('../http/middleware/intern/intern-request');
const lecturerRequest           = require('../http/middleware/lecturer/lecturer-request');
const companyRequest            = require('../http/middleware/company/company-request');
const companyManagerRequest     = require('../http/middleware/company-manager/company-manager-request');
const durationRequest           = require('../http/middleware/duration/duration-request');
// const internshipRequest         = require('../http/middleware/internship/internship-request');
const courseRequest             = require('../http/middleware/course/course-request');

let internController            = new InternController();
let lecturerController          = new LecturerController();
let companyController           = new CompanyController();
let companyManagerController    = new CompanyManagerController();
let durationController          = new DurationController();
let courseController            = new CourseController();
// let internshipController        = new InternshipController();


router.post('/intern', internRequest, internController.create);
router.put('/update/intern/:id', internRequest, internController.update);
router.put('/confirm/intern/:id',internController.confirm);
router.delete('/intern/:id', internController.remove);


router.post('/lecturer', lecturerRequest, lecturerController.create);
router.put('/lecturer/:id', lecturerRequest, lecturerController.update);
router.delete('/lecturer/:id', lecturerController.remove);


router.post('/company', companyRequest, companyController.create);
router.put('/company/:id', companyRequest, companyController.update);

router.post('/company-manager', companyManagerRequest, companyManagerController.create);
router.post('/company-manager/:id', companyManagerRequest, companyManagerController.update);


router.post('/duration', durationRequest, durationController.create);
router.post('/duration/:id', durationRequest, durationController.update);


router.post('/course', courseRequest, courseController.create);
router.put('/course/:id', courseController.update);
router.put('/open/course/:id', courseController.open);
router.put('/confirm/course/:id', courseController.confirm);

module.exports = router;