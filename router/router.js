const express        = require('express');
const router         = express.Router();
const InternController = require('../http/controller/intern-controller');
const internRequest    = require('../http/middleware/intern/intern-request');

let internController   = new InternController();


router.post('/intern', internRequest, internController.create);
router.put('/intern/:id', internRequest, internController.update);
router.delete('/intern/:id', internController.remove());

module.exports = router;