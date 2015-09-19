var express = require('express');
var router = express.Router();

/* POST submit page. */
router.post('/submit', function(req, res, next) {
    console.log(req.body.answer);
    res.json({correct: true});
});

module.exports = router;
