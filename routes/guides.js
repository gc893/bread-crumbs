var router = require('express').Router();
var guidesCtrl = require('../controllers/guides');

/* GET home page. */
router.get('/', isLoggedIn, guidesCtrl.index);//index
router.get('/search', isLoggedIn, guidesCtrl.search);//index
router.get('/new', isLoggedIn, guidesCtrl.new);//render new view//admin
router.get('/:id', isLoggedIn, guidesCtrl.show);//show guide, comments and add comment box
router.get('/:id/edit', isLoggedIn, guidesCtrl.index);//render new view and load guide//admin
router.post('/', isLoggedIn, guidesCtrl.create);//add new guide//admin
router.post('/:id/steps', isLoggedIn, guidesCtrl.addStep);//add new guide//admin
router.post('/:id/comments', isLoggedIn ,guidesCtrl.index);//add new comment

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
  }

module.exports = router;
