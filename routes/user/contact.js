var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/contact', { title: 'Contact Us', page: 'Contact Us' });
});
module.exports = router;
