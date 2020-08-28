const User = require('../models/user');

module.exports = {
    index
};

function index(req, res) {
    User.find({})
    .then(users => {
      res.render('home', {title: 'Home', user: req.user, users })
    })
  }