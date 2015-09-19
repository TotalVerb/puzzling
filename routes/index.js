var express = require('express');
var router = express.Router();
var flatfile = require('flat-file-db');
var db = flatfile('/tmp/my.db');

var ANSWERS = {
  1: 1189279,
  2: 62011,
  3: 7804,
  4: 385,
};

/* POST submit page. */
router.post('/submit', function(req, res, next) {
    var answers = db.get(req.body.name);

    if (answers === undefined) {
      answers = {};
    }
    if (+req.body.answer === ANSWERS[req.body.problem]) {
      res.json({correct: true});
      answers[req.body.problem] = +req.body.answer;
      answers.last_submission = Date.now();
      db.put(req.body.name, answers);
    } else {
      res.json({correct: false});
    }
});

module.exports = router;
