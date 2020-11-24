import React from "react";
import "./navbar.css"
import classNames from 'classnames/bind';

export default function Navbar(props) {
  
  return (
    <div class="topnav">
    
      <a class="active brand_text" id="#font_jumbo" href="/home">Study<b>Buddy</b></a>
      <a href="/profile">Logged as</a>
      <a href="/dm">DM</a>
      <a href="/">Logout</a>
      <div id="login_nav">
        <form class="login_form">
          <input
            type="text"
            placeholder="Email"
          />
          <input
            type="text"
            placeholder="Password"
          />
          <button class="btn btn-outline-success" type="button"><a href="/login">Sign in!</a></button>
        </form>
      </div>
        </div>
    

  )
}