var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('user/features', { title: 'Features', page: 'Features' });
});
module.exports = router;
