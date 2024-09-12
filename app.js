const dotenv = require('dotenv').config();
const cors = require('cors');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
let mongoose = require('mongoose');
var expressLayouts = require('express-ejs-layouts');
var session = require('express-session');
var app = express();
// view engine setup
const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    cookie: {sameSite: "lax", maxAge: oneDay},
    resave: true,
    secret: process.env.WEB_LOGIN_AUTH_TOKEN,
    activeDuration: 5 * 60 * 1000,
    saveUninitialized: true
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
const adminpaths = [
  // { pathUrl: '/user', routeFile: 'login' }
];
const userpaths = [
  { pathUrl: '/', routeFile: 'index' },
  { pathUrl: '/about', routeFile: 'about' },
  { pathUrl: '/courses', routeFile: 'courses' },
  { pathUrl: '/features', routeFile: 'features' },
  { pathUrl: '/faculty', routeFile: 'faculty' },
  { pathUrl: '/feedback', routeFile: 'feedback' },
  { pathUrl: '/contact', routeFile: 'contact' },
  { pathUrl: '/signin', routeFile: 'signin' },
  { pathUrl: '/signup', routeFile: 'signup' }
];
adminpaths.forEach((path) => {
  app.use('/admin' + path.pathUrl, require('./routes/admin/' + path.routeFile))
});
userpaths.forEach((path) => {
  app.use(path.pathUrl, require('./routes/user/' + path.routeFile))
});
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
