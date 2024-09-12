var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/feedback', { title: 'Feedback', page: 'Feedback' });
});
module.exports = router;
