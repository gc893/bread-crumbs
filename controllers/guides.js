const Guide = require('../models/guides');

function index(req, res) {
  Guide.find({}, null, function(err, guides) {
    const actions = [];
    guides.forEach(el => {
      if (!actions.find(target => target === el.action)) {actions.push(el.action)}
    })
    const components = [];
    guides.forEach(el => {
      if (!components.find(target => target === el.app_component)) {components.push(el.app_component)}
    })
    res.render('guides/index', {title: 'Guides', user: req.user, actions, components});
  })
}

function newGuide(req, res) {
  res.render('guides/new', {title: 'Enter Title', user: req.user})
}

function create(req, res) {
  req.body.slug = `${req.body.action}-${req.body.app_component}`.toLowerCase()
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

function search(req, res) {
  const slug = `${req.query.action}-${req.query.app_component}`.toLowerCase();
  //if guide found redirect, else go back to library (with message couldnt find)
  res.redirect(`/guides/${slug}`);
}

function show(req, res) {
  console.log(req.params)
  Guide.find({slug: req.params.id}, null, function(err, guide){
    res.render('guides/show', {title: 'test', guide, user: req.user})
  })
}

module.exports = {
  index,
  new: newGuide,
  create,
  search,
  show
};