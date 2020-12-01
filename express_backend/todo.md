
this is done! 
- Need to connect the db to the chat room(s).
    - create a table to include: room_id, creater_id, users in room, message_id or whole chat_id, 


- Need to give the ability for clients to join the same room. 

- Need to give the ability for clients to post thier room on a "reddit" style board for others to search chat by topic and join.
    - Something like the tweeter project when converted to react. so everytime a client creates a new room, it adds that room to the database and then renderes the database to the "feed" Search for rooms by topic or user. 

- Need to give the ability for room creater to se room to private and kick unwanted clients. 


* Routing 

  // 2 choices on connection.... 1 group broadcast or filter by socket. 
  // have clients subscribe to specific id kept in memory. (chat id?...  let them join a convorsation. 
  // mapping clients 

  // one message type for each message type.... 1 join room, send message, leave room, create room
  // maintain list of all chat rooms. whos in the rooms sockets for rooms. (big socket object with room ids as keys and user ids as values)

// on connection restore conversation from db and sent to specific client on that socket
 // on message, data to send message type and handle it specificaly 



 // sets random message id
      message.id = Math.random().toString(36).substring(2, 8)
      console.log(message)
      // will send message to all client connected to socket
      // store this message on the db
      wss.broadcast(JSON.stringify(message))

