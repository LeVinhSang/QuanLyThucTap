const express        = require('express');
const router         = express.Router();
const UserController = require('../http/controller/user-controller');
const userRequest    = require('../http/middleware/user-request');

let userController   = new UserController();


router.get('/user/:user_name');
router.post('/user', userRequest, userController.create);
router.put('/user', userRequest, userController.update);
router.delete('/user', userController.remove);

module.exports = router;