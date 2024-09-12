var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/courses', { title: 'Courses', page: 'Courses' });
});

module.exports = router;
