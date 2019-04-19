var express = require('express');
var router = express.Router();
var vd = require('../videodata');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home Express',
        description: "Learning Express",
        videodata: vd
    });
});

module.exports = router;
