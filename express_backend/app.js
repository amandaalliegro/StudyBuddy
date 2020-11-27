const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const dbHelpers = require('./models')(db);

// imports route files
const indexRouter = require('./routes/index');
// this connects the file to the route bellow
const usersRouter = require('./routes/users');
// makes app 
const app = express();


// configures app manchinery 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// attaches routers 
app.use('/', indexRouter);
// I want to use this route file for this specific name space. 
// anytime i create a new route, app.use(new route name followed by the file i want it used for)

// db helpers is a file that is connected to models. 
// anytime you hit /api/users you will use the user route file instead.
app.use('/api/users', usersRouter(dbHelpers));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
