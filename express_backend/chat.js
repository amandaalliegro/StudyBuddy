// This is the file to set up the web socket event listners 
// handling the client connection.... io.on ,,,, conects client (socket)
// each socket is a client

module.exports = (wss) => {
 
  wss.on('connection', (socket) => {
    console.log('Client Connected yo!');
    socket.send(JSON.stringify({msg: "message from server"}))
    socket.on("message", (data) => {
      const message = JSON.parse(data)
      console.log(message)

    })
    
    socket.on('close', data => {
      console.log("client disconnected")
    });
  });

};