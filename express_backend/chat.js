module.exports = (io) => {
  // socket.io
  io.on('connection', (socket) => {
    console.log('Client Connected!');
    console.log('sending a message to client');
    //socket.emit('receiveMessage', 'Hello from server');
  });
};