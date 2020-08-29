// const User = require('../models/user');

function index(req, res) {
  res.render('guides/index', {title: 'Guides', user: req.user})
  }

function newGuide(req, res) {
  res.render('guides/new', {title: 'Enter Title', user: req.user})
  }

  module.exports = {
    index,
    new: newGuide
};