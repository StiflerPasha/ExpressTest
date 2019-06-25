const express = require('express');
const router = express.Router();
const vd = require('../videodata');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home Express',
        description: "Learning Express",
        videodata: vd
    });
});

module.exports = router;
