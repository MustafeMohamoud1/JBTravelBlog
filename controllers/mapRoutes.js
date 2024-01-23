const router = require('express').Router();

//renders map page if user is logged in
router.get('/map', (req, res) => {
        if (req.session.loggedIn) {
                res.render('map')
        } else {
                //if user not logged in bring to log in page
        res.render('login');
        }
   });

module.exports = router;

// router.get('/map', (req, res) => {
//         res.render('map', {
//             user_id: req.session.user_id,
//             user_name: req.session.user_name,
//             loggedIn: req.session.loggedIn
//         });
//     });