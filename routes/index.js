var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('/home')
});

module.exports = router;
