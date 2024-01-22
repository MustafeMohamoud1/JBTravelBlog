const router = require('express').Router();
const { Recommendation } = require('../../models');


router.get('/', async (req, res) => {
  res.render('recommendation', { loggedIn: req.session.loggedIn });
});


router.post('/', async (req, res) => {
    console.log('create recommendation');
    console.log(req.body);
    try {
      const newRecommendation = await Recommendation.create(req.body);
      console.log(newRecommendation)
      res.status(200).json(newRecommendation);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
  
  module.exports = router;