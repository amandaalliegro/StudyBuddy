const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./db');
const app = express();
const dbHelpers = require('./models')(db);
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  path: '/socket'
});
const cors = require('cors')

// const PORT = 4000;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";
// imports route files
const indexRouter = require('./routes/index');
// this connects the file to the route bellow
const usersRouter = require('./routes/users');

// makes app 
// const searchRouter = require('./routes/search');



io.on("connection", (socket) => {
  console.log("connected")
  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  console.log("roomid", roomId)

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    console.log("data", data)
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});

// server.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

// configures app manchinery 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
// attaches routers 
app.use('/', indexRouter);
//app.use('/search', indexRouter) // you cant overwrite 
app.use('/user/:id', usersRouter)
// I want to use this route file for this specific name space. 
// anytime i create a new route, app.use(new route name followed by the file i want it used for)

// db helpers is a file that is connected to models. 
// anytime you hit /api/users you will use the user route file instead.
app.use('/api/users', usersRouter(dbHelpers));
// app.use('/api/users', searchRouter(dbHelpers));


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