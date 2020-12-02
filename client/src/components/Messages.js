import React, { useState } from "react";
import './messages.css'
import useChat from "../hooks/useChat"
import StudyTogether from "./StudyTogether";


export default function Messages(props) {
  const [text, setText] = useState('')
  const [roomId, setRoomId] = useState(19) //props.history.location.state.data
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
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
    event.preventDefault()
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault()
    sendMessage(newMessage);
    setNewMessage("");
  };
  return (
    <div id='chat_container'>
    <div class="row" id="chat_box">
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
        </div>

      </div>
        <title>chat</title>
        <div id='message_side'>
        <h1>Room: {roomId}</h1>
        
        
          <ol id='messages'>
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
            <form action>
            <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Write message..."
          
        />
            <button id='send-btn' onClick={handleSendMessage}>Send</button>
            
          
        </form>
        </div>
        </div>
      
      </div>
  );
};