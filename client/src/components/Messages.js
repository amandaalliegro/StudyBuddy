import React, { useState, useEffect } from "react";
import './messages.css'
import axios from "axios"
import useChat from "../hooks/useChat"

export default function Messages(props) {
  const [text, setText] = useState('')
  const [roomId, setRoomId] = useState(19) //props.history.location.state.data
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessages = (event) => {
  
    axios.post('/messages', { user_id: localStorage.getItem('id'), newMessage: newMessage })
      .then((result) => {
        setNewMessage((prevnewMessage) => [...prevnewMessage, result.data])
        return false
      })
  };

  function onSubmitMessage(event) {
    event.preventDefault();
    const newMsg = () => {
      setNewMessage(event.target.value);

    }
    axios.post("/message", newMsg)
      .then(res => {
        setNewMessage(res.data)
      })
      .catch((err) => {
        { console.log(err.message); }
      })

  };

  useEffect(() => {
    // axios to get all the created messages from the db by user id
    axios({
      method: 'GET',
      url: 'http://localhost:3005/messages',

    })
    // then take the result and set that result.data as the new rooms array state. 
    .then(result => {
      console.log("res", result.data)
      setNewMessage(result.data)
      onSubmitMessage(setNewMessage(result.data))
    })
  }, [])

  // Node.js server registers query for notification
  // On notification of change, node.js server pulls changes from database
  // On successful retrieval of changes, node.js server uses socket.io to publish changes to all interested clients

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    handleNewMessages(newMessage);
    setNewMessage("");
    // post messages to db
  };

  return (
    console.log("Messages", messages) || <div id='chat_container'>
    
      <div className="chat-room-container">
        <h1 className="room-name">Room: {roomId}</h1>
        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
              <li
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                  }`}
              >
                {message.body}
              </li>
            ))}
          </ol>
        </div>
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          className="new-message-input-field"
        />
        <button onClick={handleSendMessage} className="send-message-button">
          Send
      </button>
      </div>
    </div>
  );
};
