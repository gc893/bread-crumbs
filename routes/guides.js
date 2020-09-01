var router = require('express').Router();
var guidesCtrl = require('../controllers/guides');

/* GET home page. */
router.get('/', isLoggedIn, guidesCtrl.index);//index
router.get('/search', isLoggedIn, guidesCtrl.search);//use search middleware
router.get('/list', isLoggedIn, guidesCtrl.list);
router.get('/new', isLoggedIn, guidesCtrl.new);//render new view//admin
router.get('/editStep', isLoggedIn, guidesCtrl.editStep);//render edit view//admin
router.get('/:id', isLoggedIn, guidesCtrl.show);//show guide, comments and add comment box
router.get('/:id/edit', isLoggedIn, guidesCtrl.editGuide);//render new view and load guide//admin
router.post('/', isLoggedIn, guidesCtrl.create);//add new guide//admin
router.post('/:id/steps', isLoggedIn, guidesCtrl.addStep);//add new step//admin
router.post('/:id/comments', isLoggedIn ,guidesCtrl.addComment);//add new comment
router.put('/:id', isLoggedIn, guidesCtrl.updateGuide);
router.put('/:stepId/updateStep', isLoggedIn, guidesCtrl.updateStep);//edit step//admin
router.delete('/:id/:stepId', isLoggedIn, guidesCtrl.removeStep);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
  }

module.exports = router;
