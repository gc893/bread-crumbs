var router = require('express').Router();
var homeCtrl = require('../controllers/home');

/* GET home page. */
router.get('/', homeCtrl.show);

module.exports = router;
