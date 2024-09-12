var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/signup', { title: 'Sign Up', page: 'Sign Up', layout: false });
});
module.exports = router;
