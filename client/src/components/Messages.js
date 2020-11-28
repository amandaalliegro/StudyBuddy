
import React, { useState, useEffect } from 'react'

import axios from 'axios';
import "./messages.css"
// make use state to hold the socket and pass the socket as a prop. or use hook 
export default function Messages(props) {
  
  return (
    <div id="chat_box">
        <title>Socket.IO chat</title>
        <ul id="messages" />
        <form action>
          <input id="m" autoComplete="off" /><button>Send</button>
          
        </form>
      </div>
  );
};

