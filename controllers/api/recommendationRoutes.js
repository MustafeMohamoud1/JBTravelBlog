const router = require('express').Router();
const { Recommendation } = require('../../models');


router.get('/', async (req, res) => {
         res.render('recommendation', { loggedIn: req.session.loggedIn });
    });

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
  // working section
// router.get('/recomJson', async (req, res) => {
//     try {
//         const readerData = await Recommendation.findAll({
        
//     });
//     res.status(200).json(readerData);
    
//   } catch (err) {
//     res.status(500).json(err);
//   }  
// });
// main page list of all recommendations
router.get('/recomJson/homepage', async (req, res) => {
  try {
    const recommendations = await Recommendation.findAll({
           });

    const recomLoop = recommendations.map((recomIndiv) => recomIndiv.get({ plain: true }));
console.log(recomLoop)
// need to fix this , code working reference to Italy is a little redundant 
    res.render('homepage', {recomLoop});
  //res.status(200).json(recommendations);
  
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
// 
    res.render('italy', { loggedIn: req.session.loggedIn,recomLoop});
   
  } catch (err) {
    res.status(500).json(err);
  }
});
//-----------------------experimental

router.get('/recomJson/', async (req, res) => {
    try {
        const readerData = await Recommendation.findAll({
        
    });
    res.status(200).json(readerData);
    
  } catch (err) {
    res.status(500).json(err);
  }  
});
//----------------------experimental

// Updates book based on its isbn
router.put('/recomJson/:id', (req, res) => {
  // Calls the update method on the Book model
  Recommendation.update(
    {
      // All the fields you can update and the data attached to the request body.
      place: req.body.place,
      description: req.body.description,
   
    } ,
    {
    // Gets the books based on the isbn given in the request parameters
    where: {
      id: req.params.id,
    },
  }
  )
    .then((updateRecommendation) => {
      // Sends the updated recommendation as a json response
      res.json(updateRecommendation);
    })
    .catch((err) => res.json(err));
});
 
  //Update the reccommendation working
  // router.put('/recomJson/:id', async (req, res) => {
  //   try {
  
  //     const post = await Recommendation.findByPk(req.params.id);
  //     console.log(post)
  //     if(!post) {
  //       return res.status(404).json({message: 'Post not found'});
  //     }
  
  //     post.place = req.body.place;
  //     post.description = req.body.description;
  //     const updatedPost = await post.save();
  // console.log(updatedPost)
  //     res.json(updatedPost);
  
  //   } catch (err) {
  //       console.error(err);
  //       res.status(500).json({message: 'Server error'});
  //       }
  
  // });

  //delete a comment
  //router.delete('/:id', withAuth, async (req, res) => {
router.delete('/:id', async (req, res) => {
    try {
      const postReccommendation = await Recommendation.destroy({
        where: {
          id: req.params.id,
        
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
