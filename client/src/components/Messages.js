import React, { useState } from "react";
import './messages.css'


export default function Messages(props) {
  const [text, setText] = useState('')
  const sendMessage = (event) => {
    event.preventDefault()
    const newMessage = {
      user: props.fullName,
      message: text
    }
    props.socket.send(JSON.stringify(newMessage))
    setText('')

  }
  const messageList = props.messages.map((message) => <li key= {message.id} >{message.user} {message.message}</li>)
  
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
        <ul id="messages">{messageList}</ul>
        <form action>
          <div id="m.container">
            <input id="m" autoComplete="off" onChange= {(event) => setText(event.target.value)}/><button id='send-btn' onClick= {sendMessage}>Send</button>
            
          </div>
        </form>
        </div>
        </div>
      
      </div>
  );
};