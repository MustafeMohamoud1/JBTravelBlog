const router = require('express').Router();
const { Recommendation } = require('../../models');

// router.get('/', async (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/recommendation');     
// } else {
//     res.render('login');
// }
// });
router.get('/', async (req, res) => {
  const post = { name: '', content: '' }
  res.render('recommendation', { Recommendation, newRecommendation: true, loggedIn: req.session.loggedIn });
});


router.post('/', async (req, res) => {
    console.log('create recommendation')
    try {
      const newRecommendation = await Recommendation.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      console.log(newRecommendation)
      res.status(200).json(newRecommendation);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //Update the reccommendation
//   router.put('/post/:id', async (req, res) => {
//     try {
//         const postData = await Post.update(
//             {
//                 title: req.body.title,
//                 content: req.body.content,
//             },
//             { where: { id: req.params.id } }
//         );
//         if (postData) {
//             res.status(201).json({ id: req.params.id });
//         } else {
//             res.status(500).json({ message: "There was an error while updating the post" });
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

  //delete a comment
// router.delete('/:id', withAuth, async (req, res) => {
//     try {
//       const postReccommendation = await Reccommendation.destroy({
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });
  
//       if (reccommendationData) {
//         res.status(200).json(reccommendationData);
//       } else {
//         res.status(404).json({ message: "No Reccommendation found with this id!" });
//         return;
//       }
  
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
  module.exports = router;