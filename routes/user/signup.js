var express = require('express');
var router = express.Router();
const async = require('async');
const userModel = require('../../models/users.model');
let response = require("../../utilities/response.manager");
let mongoConnection = require('../../utilities/connections');
const constants = require("../../utilities/constants");
router.get('/', function(req, res, next) {
  res.render('user/signup', { title: 'Sign Up', page: 'Sign Up', layout: false });
});
router.post('/', async (req, res) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { fullname, email, username, password } = req.body;
  if(fullname && email && username && password){
    let primary = mongoConnection.useDb(constants.DEFAULT_DB);
    let obj = {
      fullname : fullname,
      email : email,
      username : username,
      password : password
    }
    let craetedUser = await primary.model(constants.MODELS.users, userModel).create(obj);
    var goto = process.env.APP_URI + '/signin';
    res.writeHead(302, { 'Location': goto });
    res.end();
  }else{
    var goto = process.env.APP_URI + '/signin';
    res.writeHead(302, { 'Location': goto });
    res.end();
  }
});
module.exports = router;
