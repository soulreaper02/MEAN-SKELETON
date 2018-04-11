var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});
router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });

module.exports = router;
