// const User = require('../models/user');

function index(req, res) {
  res.render('guides/index', {title: 'Guides', user: req.user})
  }

  module.exports = {
    index
};