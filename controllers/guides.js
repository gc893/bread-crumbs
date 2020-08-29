const Guide = require('../models/guides');

function index(req, res) {
  res.render('guides/index', {title: 'Guides', user: req.user})
  }

function newGuide(req, res) {
  res.render('guides/new', {title: 'Enter Title', user: req.user})
  }

  function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    Guide.create(req.body)
    .then(guide => {
        console.log(guide);
        res.redirect('/guides');//should redirect to show to add steps
    })
    .catch( err => {
        console.log(err);
        res.redirect('/guides');
    })
  }

  module.exports = {
    index,
    new: newGuide,
    create
};