const router = require('express').Router();
const { Recommendations } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newRecommendation = await Recommendations.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newRecommendation);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const recommendationData = await Recommendations.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!projectData) {
            res.status(404).json({ message: 'This recommendation does not exist!' });
            return;
        }

        res.status(200).json(recommendationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;