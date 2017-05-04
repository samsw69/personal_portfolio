const router = require('express').Router();
// const registrations = require('../controllers/registrations');
// const sessions = require('../controllers/sessions');
// const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('statics/index'));

router.get('/artsy', (req, res) => res.render('statics/artsy'));
router.get('/betbucket', (req, res) => res.render('statics/betbucket'));
router.get('/chickenrun', (req, res) => res.render('statics/chickenrun'));
router.get('/phwoarinrow', (req, res) => res.render('statics/phwoarinrow'));

// router.route('/artsy')
//   .get(statics.artsy);
//
// router.route('/betbucket')
//   .get(statics.betbucket);
//
// router.route('/chickenrun')
//   .get(statics.chickenrun);
//
// router.route('/phwoarinrow')
//   .get(statics.phwoarinrow);

// router.route('/register')
//   .get(registrations.new)
//   .post(registrations.create);
//
//
// router.route('/login')
//     .get(sessions.new)
//     .post(sessions.create);

router.all('*', (req, res) => res.notFound());
router.all('*', (req, res) => res.notFound());
module.exports = router;
