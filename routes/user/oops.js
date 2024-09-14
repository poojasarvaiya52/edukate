var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/oops', { title: 'Oops', page: 'Oops' });
});

module.exports = router;
