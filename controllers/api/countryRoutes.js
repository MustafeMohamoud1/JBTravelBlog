const express = require('express');
const router = express.Router();

//france get request to render page and post requests to rerender with new comments
router.get('/views/france.handlebars', (req, res) => {
    res.render('France'); // Render France.handlebars
});

//italy get request to render page and post requests to rerender with new comments
router.get('/views/italy.handlebars', (req, res) => {
    res.render('Italy'); // Render Italy.handlebars 
});

//spain get request to render page and post requests to rerender with new comments
router.get('/views/spain.handlebars', (req, res) => {
    res.render('Spain'); // Render Spain.handlebars 
});


module.exports = router;

//once done create model for comments 