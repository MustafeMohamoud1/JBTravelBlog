const router = require('express').Router();
const { Recommendation } = require('../models');

//Check if user logged in, and brings to profile page
router.get('/', async (req, res) => {
    // get top 3 recommendations for each country
    // pass each of the country recommendations object bo below 

    const franceData = await Recommendation.findAll({
        limit:1,
        attributes: ['city', 'place', 'description'],
        where: {country: 1}
      });
    
      const franceRecommendations = franceData.map((place) => place.get({ plain: true }));
    
      const italyData = await Recommendation.findAll({
        limit:1,
        attributes: ['city', 'place', 'description'],
        where: {country: 2}
      });
    
      const italyRecommendations = italyData.map((place) => place.get({ plain: true }));
    
      const spainData = await Recommendation.findAll({
        limit:1,
        attributes: ['city', 'place','description'],
        where: {country:3}
      });
    
      
      const spainRecommendations = spainData.map((place) => place.get({ plain: true }));
      console.log(franceRecommendations);

    res.render('homepage', {franceRecommendations, italyRecommendations, spainRecommendations,loggedIn: req.session.loggedIn});
});
  
module.exports = router;