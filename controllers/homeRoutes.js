const router = require('express').Router();
//const { Project, User } = require('../models');
//const withAuth = require('../utils/auth');

//GET request for travel recommendations and user information

//withAuth?

//Check if user logged in, and brings to profile page

 //login handler
 router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        console.log('User logged in');
        res.redirect('/');     
    } else {
        console.log('show log in');
        res.render('login');
   }
});

//Check if user logged in, and brings to profile page
router.get('/signup', (req, res) => {
    res.render('signup');
});

//Check if user logged in, and brings to profile page
router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;
