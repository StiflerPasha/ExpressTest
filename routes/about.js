const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About View',
        greetings: "Hi, my name is Pasha Dv"
    });
});

module.exports = router;