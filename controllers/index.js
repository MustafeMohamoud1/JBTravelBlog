const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');

const loginRoutes = require('./loginRoutes.js');
const signupRoutes = require('./signupRoutes.js');
const apiRoutes = require('./api');
const countryRoutes = require('./countryRoutes.js');
const mapRoutes = require('./mapRoutes.js');

router.use('/', homeRoutes);
router.use('/', loginRoutes);
router.use('/', signupRoutes);
router.use('/', countryRoutes);
router.use('/', mapRoutes);
router.use('/api', apiRoutes);

module.exports = router;