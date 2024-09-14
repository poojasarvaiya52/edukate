var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/content', { title: 'Content', page: 'Content' });
});

module.exports = router;
