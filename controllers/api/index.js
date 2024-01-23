const router = require('express').Router();

const userRoutes = require('./userRoutes');
const recommendationRoutes = require('./recommendationRoutes');

router.use('/users', userRoutes);
router.use('/recommendation', recommendationRoutes);

module.exports = router;