var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/java', { title: 'Java', layout: false, page: 'Java' });
});
module.exports = router;