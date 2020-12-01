// This is the file to set up the web socket event listners 
// handling the client connection.... io.on ,,,, conects client (socket)
// each socket is a client

module.exports = (wss) => {

  wss.broadcast = data => {
    console.log('SENDING MESSAGE TO ALL CLIENTS')
    console.log(wss.clients.size);
    wss.clients.forEach(function each(client) {
console.log("HERE")
      client.send(data);
    });
  };

  wss.on('connection', (socket) => {
    console.log('Client Connected yo!');
    socket.on("message", (data) => {
      console.log('recieving a message from client')
      const message = JSON.parse(data)
      // sets random message id
      message.id = Math.random().toString(36).substring(2, 8)
      console.log(message)
      // will send message to all client connected to socket
      wss.broadcast(JSON.stringify(message))

    })   

    socket.on('close', data => {
      console.log("client disconnected")
    });
  });

};