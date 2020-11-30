// This is the file to set up the web socket event listners 
// handling the client connection.... io.on ,,,, conects client (socket)
// each socket is a client

module.exports = (wss) => {

  wss.broadcast = data => {
    console.log('SENDING MESSAGE TO ALL CLIENTS')
    console.log(wss.clients.size);

    wss.clients.forEach(function each(client) {


      client.send(data);
    });
  };

  // 2 choices on connection.... 1 group broadcast or filter by socket. 
  // have clients subscribe to specific id kept in memory. (chat id?...  let them join a convorsation. 
  // mapping clients 

  // one message type for each message type.... 1 join room, send message, leave room, create room
  // maintain list of all chat rooms. whos in the rooms sockets for rooms. (big socket object with room ids as keys and user ids as values)

  wss.on('connection', (socket) => {
    console.log('Client Connected yo!');
    // on connection restore conversation from db and sent to specific client on that socket

    socket.on("message", (data) => {
      console.log('recieving a message from client')
      const message = JSON.parse(data)
      // on message, data to send message type and handle it specificaly 


      // sets random message id
      message.id = Math.random().toString(36).substring(2, 8)
      console.log(message)
      // will send message to all client connected to socket
      // store this message on the db
      wss.broadcast(JSON.stringify(message))

    })

    socket.on('close', data => {
      console.log("client disconnected")
    });
  });
};