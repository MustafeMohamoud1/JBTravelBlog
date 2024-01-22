const router = require('express').Router();

//Check if user logged in, and brings to profile page
router.get('/', (req, res) => {
    res.render('homepage', {loggedIn: req.session.loggedIn});
});
  
module.exports = router;
