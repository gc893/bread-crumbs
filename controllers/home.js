const User = require('../models/user');



function show(req, res) {
  res.render('home', {title: 'Home', user: req.user})
  }

  module.exports = {
    show
};