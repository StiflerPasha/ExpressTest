const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('users', {
        title: "Users View",
        names: ["Andrey", "Pasha", "John"]
    });
});

module.exports = router;
