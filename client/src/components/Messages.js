import React, { useState } from "react";
import './messages.css'
import useChat from "../hooks/useChat"

export default function Messages(props) {
  const [text, setText] = useState('')
  const [roomId, setRoomId] = useState(19) //props.history.location.state.data
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent


  // Node.js server registers query for notification
  // On notification of change, node.js server pulls changes from database
  // On successful retrieval of changes, node.js server uses socket.io to publish changes to all interested clients





  // const sendMessage = (event) => {
  //   event.preventDefault()
  //   const newMessage = {
  //     user: props.fullName,
  //     message: text
  //   }

  //   props.socket.send(JSON.stringify(newMessage))
  //   setText('')
  //   console.log("props.socket", props.socket)

  // }
  // const messageList = props.messages.map((message) => <li key= {message.id} >{message.user} {message.message}</li>)
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
    // post messages to db
  };

  return (
    console.log("Messages", messages) || <div id='chat_container'>
      {/*<div class="row" id="chat_box">
       populate list of users rooms (ie: get all rooms with user_id
        <div id='history_messages'>
        <div id='chat_card'>
        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" id="avatar-msg"alt="avatar" />
          <p>old message</p>
        </div>
        <div id='chat_card'>
        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" id="avatar-msg"alt="avatar" />
          <p>old message</p>
        </div>
        <div id='chat_card'>
        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" id="avatar-msg"alt="avatar" />
          <p>old message</p>
  </div>*/}


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