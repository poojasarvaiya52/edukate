var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/signin', { title: 'Login', page: 'Login', layout: false });
});
module.exports = router;
