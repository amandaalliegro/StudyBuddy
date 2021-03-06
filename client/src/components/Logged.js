import React from "react";
import "./logged.css"
import classNames from 'classnames/bind';
export default function Logged(props) {
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm
  });
  return (
    <div>
      <div class="container" >
        <div class="jumbotron" id="jumbo-logged">
          <div id="#brand_box">
          <h1 id="font-size-brand"><b>Study Buddy</b></h1>
          <p id="subtitle_brand"><b><i>Lets Study Together!</i></b></p>
          </div>
        </div>
      </div>
      <div class="row" id="body_container">
        <div class="column">
          <div class="card"><a href='/messages'><b>Check your messages!</b> 
          <p><img id='chat-img' src='/chat.png'/></p></a>
          </div>
        </div>
        <div class="column">
          <div class="card"><a href='/search'><b>Find new buddies!</b> 
          <p><img id='chat-img' src='/search.png'/></p></a>
          
          </div>
        </div>
        
      </div>
    </div>
  )
}