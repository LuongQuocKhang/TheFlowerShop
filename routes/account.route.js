var express = require('express');
var router = express.Router();
const accountController = require("../api/v1/controllers/account.controller");
const userController = require("../api/v1/controllers/user.controller");
const authController = require("../api/v1/controllers/auth.controller");
var express = require('express');
var router = express.Router({mergeParams: true});

/* GET home page. */
router.post('/login', accountController.login);
router.post('/register', accountController.register);
router.post('/:id', userController.getAccountInfo);
router.post('/authenticate', authController.isAuthenticated)
module.exports = router;