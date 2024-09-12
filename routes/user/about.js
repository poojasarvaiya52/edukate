var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/about', { title: 'About Us', page: 'About Us' });
});
module.exports = router;
