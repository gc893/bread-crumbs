const Guide = require('../models/guides');
const sendMail = require('../mail');

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
  res.redirect(`/guides/${slug}`);
}

function show(req, res) {
  Guide.find({slug: req.params.id})
  .populate({path: 'reviews', populate: { path: 'user_id' }
  })
  .then(guide => {
      let scoreSum = 0;
      let totalReviews = 1;
      if (guide.length > 0) {
        guide[0].reviews.forEach(el=> {scoreSum += el.score});
        totalReviews = guide[0].reviews.length;
      }
      let avgScore = Math.round((scoreSum/totalReviews)*10)/10 || 0;
    if(guide.length < 1){
      res.redirect('/guides/list')//could not find message
    } else {
    res.render('guides/show', {title: 'test', guide, user: req.user, average: avgScore})
  }
  })
}

function addStep(req ,res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  Guide.findById(req.params.id)
    .then(guide => {
      guide.steps.push(req.body);
      guide.save(function(err){
        res.redirect(`/guides/${guide.slug}`)
      })
    })
}

function removeStep(req, res) {
  Guide.findById(req.params.id)
    .then(guide => {
      console.log(guide)
      const idx = guide.steps.findIndex(el => el._id.toString() === req.params.stepId);
      guide.steps.splice(idx,1);
      guide.save(function(err){
        res.redirect(`/guides/${guide.slug}`)
      })
    })
}

function editStep(req, res) {
  Guide.findById(req.query.guideId)
    .then(guide => {
      const step = guide.steps.find(el => el._id.toString() === req.query.stepId);
      console.log(typeof guide.steps[0])
      console.log(req.query.stepId)
      res.render('guides/stepDetails', {title: 'Edit Step', step, user: req.user})
    })
}

function updateStep(req, res) {
  Guide.find({'steps._id': req.params.stepId})
    .then(guide => {
      const idx = guide[0].steps.findIndex(el => el._id.toString() === req.params.stepId);
      guide[0].steps[idx].title = req.body.title;
      guide[0].steps[idx].description = req.body.description;
      guide[0].steps[idx].image = req.body.image;
      guide[0].steps[idx].code_block = req.body.code_block;
      guide[0].save(function(err){
        res.redirect(`/guides/${guide[0].slug}`)
      })
    })
}

function addComment(req,res) {
  req.body.user_id = req.user._id
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  Guide.findById(req.params.id)
    .then(guide => {
      guide.reviews.unshift(req.body);
      guide.save(function(err){
        if(req.body.score < 4){
          sendMail(req.user.name, guide.title, req.body.comment, req.body.score);
        }
        res.redirect(`/guides/${guide.slug}`);
      })
    })
}

function list(req ,res) {
  Guide.find({})
  .then(guides => {
    res.render('guides/list', {title: 'Guides', user: req.user, guides})
  })
}

function editGuide(req ,res) {
  Guide.findById(req.params.id)
  .then(guide => {
    res.render('guides/edit', {title: guide.title, guide, user: req.user})
  })
}

function updateGuide(req, res) {
  Guide.findByIdAndUpdate(req.params.id, req.body)
  .then(()=> {
    res.redirect('/guides/list')
  })
}

module.exports = {
  index,
  new: newGuide,
  create,
  search,
  show,
  addStep,
  removeStep,
  editStep,
  updateStep,
  addComment,
  list,
  editGuide,
  updateGuide
};