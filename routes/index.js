var router = require('express').Router();
var usersCtrl = require('../controllers/users');

/* GET home page. */
router.get('/', usersCtrl.index);

module.exports = router;
