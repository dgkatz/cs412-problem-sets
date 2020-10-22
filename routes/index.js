var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World!' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: req.body.title, title_length: req.body.title.length });
});

module.exports = router;
