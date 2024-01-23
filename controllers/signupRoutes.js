const router = require('express').Router();

//Check if user logged in, and brings to profile page
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');     
    } else {
        res.render('signup');
   }
});

module.exports = router;