
import React from "react";

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