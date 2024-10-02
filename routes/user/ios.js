var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/ios', { title: 'Ios', page: 'Ios' });
});
module.exports = router;
