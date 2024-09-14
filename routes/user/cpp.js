var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/cpp', { title: 'Cpp', page: 'Cpp' });
});

module.exports = router;
