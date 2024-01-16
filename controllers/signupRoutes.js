const router = require('express').Router();

//Check if user logged in, and brings to profile page
router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;
