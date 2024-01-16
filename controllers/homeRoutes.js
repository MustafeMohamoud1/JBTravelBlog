const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

//GET request for travel recommendations and user information

//withAuth?

//Check if user logged in, and brings to profile page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});


//Check if user logged in, and brings to profile page
router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;
