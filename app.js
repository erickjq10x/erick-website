const exphbs = require('express-handlebars');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var weaponsRouter = require('./routes/weapons');
var registerRouter = require('./routes/register');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/weapons', weaponsRouter);
app.use('/register', registerRouter);

// hbs engine settings
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials',
  extname: '.hbs',
}));
app.set('view engine', 'hbs');

module.exports = app;
