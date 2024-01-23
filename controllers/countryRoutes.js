const router = require('express').Router();
const { Recommendation } = require('../models');

router.get('/france', async (req, res) => {
  try {
      const franceRecommendations = await Recommendation.findAll({
          where: { country: 'France' },
      });
      res.render('France', { recommendations: franceRecommendations });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

router.get('/italy', async (req, res) => {
  try {
      const italyRecommendations = await Recommendation.findAll({
          where: { country: 'Italy' },
      });
      res.render('Italy', { recommendations: italyRecommendations });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

router.get('/spain', async (req, res) => {
  try {
      const spainRecommendations = await Recommendation.findAll({
          where: { country: 'Spain' },
      });
      res.render('Spain', { recommendations: spainRecommendations });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
