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
    <div id="chat_box">
        <title>chat</title>
        <div>
        <ul id="messages">{messageList}</ul>
        <form action>
          <div id="m.container">
            <input id="m" autoComplete="off" onChange= {(event) => setText(event.target.value)}/>
            <button onClick= {sendMessage}>Send</button>
            
          </div>
        </form>
        </div>
      </div>
      </div>
  );
};