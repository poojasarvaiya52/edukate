var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/java', { title: 'Java', page: 'Java' });
});
module.exports = router;