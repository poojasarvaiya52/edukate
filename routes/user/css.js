var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/css', { title: 'Css', page: 'Css' });
});

module.exports = router;
