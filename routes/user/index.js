var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/index', { title: 'Home', layout: false, page: 'Home' });
});
module.exports = router;
