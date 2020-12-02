// This is the file to set up the web socket event listners 
// handling the client connection.... io.on ,,,, conects client (socket)
// each socket is a client
const db = require('./db');
const dbHelpers = require('./models')(db);


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
    // gets current message log from the db
    //retrieveMessages(data)
    socket.on("message", (data) => {
      console.log('recieving a message from client')
      const message = JSON.parse(data)
      // sets random message id
      message.id = Math.random().toString(36).substring(2, 8)
      // will send message to all client connected to socket
      //postMessage(message)
      console.log(message)
      
      wss.broadcast(JSON.stringify(message))

    })   

    socket.on('close', data => {
      console.log("client disconnected")
    });
  });

};