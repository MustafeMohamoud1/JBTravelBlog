const router = require('express').Router();
const { Recommendation } = require('../../models');


router.get('/', async (req, res) => {
         res.render('recommendation', { loggedIn: req.session.loggedIn });
    });

    
  // working section
router.get('/recomJson', async (req, res) => {
    try {
        const readerData = await Recommendation.findAll({
        
    });
    res.status(200).json(readerData);
    
  } catch (err) {
    res.status(500).json(err);
  }  
});
//json file to display selected country in the database (working code)
router.get('/recomJson/:country', async (req, res) => {
  try {
    const recommendations = await Recommendation.findAll({
            where: {
        country: req.params.country
      }
    });

    const recomLoop = recommendations.map((recomIndiv) => recomIndiv.get({ plain: true }));

// need to fix this , code working reference to Italy is a little redundant 
    res.render('Italy', { recomLoop});
  //res.status(200).json(recommendations);
  
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/recomJson/Italy', async (req, res) => {
//   try {
//     const recommendations = await Recommendation.findAll({
//             where: {
//         country: 'Italy'
//       }
//     });
//     const dishes = recommendations.map((dish) => dish.get({ plain: true }));

//     res.render('italy', { dishes });
//   //res.status(200).json(recommendations);
  
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/', async (req, res) => {
    console.log('create recommendation');
    console.log(req.body);
    try {
      const newRecommendation = await Recommendation.create(req.body);
      console.log(newRecommendation)
      res.status(200).json(newRecommendation);
    } catch (err) {
      console.log(err);
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
  //router.delete('/:id', withAuth, async (req, res) => {
router.delete('/:id', async (req, res) => {
    try {
      const postReccommendation = await Recommendation.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (postReccommendation) {
        res.status(200).json(postReccommendation);
      } else {
        res.status(404).json({ message: "No Reccommendation found with this id!" });
        return;
      }
  
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;