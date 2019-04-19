var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About View',
        greetings: "Hi, my name is Pasha"
    });
});

module.exports = router;