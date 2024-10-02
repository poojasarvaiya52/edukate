var express = require ('express');
var router = express.Router();
const mongoConnection = require('../../utilities/connections');
const constants = require('../../utilities/constants');
const coursesModel = require('../../models/courses.model');
router.get('/', function(req, res, next) {
  res.render('user/courses', { title: 'Courses', page: 'Courses' });
});
router.post('/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { cname , cate, cfaculty, cimg } = req.body;
  if(coursename && course_rate && course_faculty && course_image){
    let primary = mongoConnection.coursesDb(constants.DEFAULT_DB);
    let obj = {
      coursename : cname,
      course_rate : crate,
      course_faculty : cfaculty,
      course_image: cimg
    }
  
let craetedUser = await primary.model(constants.MODELS.users, coursesModel).create(obj);
    var goto = process.env.APP_URI + '/courses';
    res.writeHead(302, { 'Location': goto });
    res.end();
  }else{
    var goto = process.env.APP_URI + '/form';
    res.writeHead(302, { 'Location': goto });
    res.end();
  }
});


module.exports = router;
