const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recommendationRoutes = require('./recommendationRoutes');
const test = require('./test');

router.use('/users', userRoutes);
router.use('/recommendation', recommendationRoutes);
router.use('/test');

module.exports = router;