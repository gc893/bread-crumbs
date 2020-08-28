var router = require('express').Router();
var guidesCtrl = require('../controllers/guides');

/* GET home page. */
router.get('/', isLoggedIn ,guidesCtrl.index);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
  }

module.exports = router;
