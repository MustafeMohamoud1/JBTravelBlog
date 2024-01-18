const express = require('express');
const router = express.Router();

//france get request to render page and post requests to rerender with new comments
router.get('/france', async (req, res) => {
  try {
    const franceComments = await Comment.findAll();
    res.render('France', { comments: franceComments });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/france/comment', async (req, res) => {
  const newComment = req.body.comment;

  try {
    // Store the comment in the database
    await Comment.create({ content: newComment });

    // Redirect back to the France page after submitting the comment
    res.redirect('/france');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//italy get request to render page and post requests to rerender with new comments
router.get('/italy', async (req, res) => {
  try {
    const italyComments = await Comment.findAll();
    res.render('Italy', { comments: italyComments });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/italy/comment', async (req, res) => {
  const newComment = req.body.comment;

  try {
    // Store the comment in the database
    await Comment.create({ content: newComment });

    // Redirect back to the Italy page after submitting the comment
    res.redirect('/italy');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//spain get request to render page and post requests to rerender with new comments
router.get('/spain', async (req, res) => {
  try {
    const spainComments = await Comment.findAll();
    res.render('Spain', { comments: spainComments });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/spain/comment', async (req, res) => {
  const newComment = req.body.comment;
  
  try {
    // Store the comment in the database
    await Comment.create({ content: newComment });

    // Redirect back to the France page after submitting the comment
    res.redirect('/spain');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
module.exports = router;

//once done create model for comments