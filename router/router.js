const express                   = require('express');
const router                    = express.Router();
const InternController          = require('../http/controller/intern-controller');
const LecturerController        = require('../http/controller/lecturer-controller');
const CompanyController         = require('../http/controller/company-controller');
const CompanyManagerController  = require('../http/controller/company-manager-controller');
const internRequest             = require('../http/middleware/intern/intern-request');
const lecturerRequest           = require('../http/middleware/lecturer/lecturer-request');
const companyRequest            = require('../http/middleware/company/company-request');
const companyManagerRequest     = require('../http/middleware/company-manager/company-manager-request');

let internController            = new InternController();
let lecturerController          = new LecturerController();
let companyController           = new CompanyController();
let companyManagerController    = new CompanyManagerController();


router.post('/intern', internRequest, internController.create);
router.put('/intern/:id', internRequest, internController.update);
router.delete('/intern/:id', internController.remove);


router.post('/lecturer', lecturerRequest, lecturerController.create);
router.put('/lecturer/:id', lecturerRequest, lecturerController.update);
router.delete('/lecturer/:id', lecturerController.remove);


router.post('/company', companyRequest, companyController.create);
router.put('/company/:id', companyRequest, companyController.update);

router.post('/company-manager', companyManagerRequest, companyManagerController.create);


module.exports = router;