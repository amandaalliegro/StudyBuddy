import React from "react";
import "./navbar.css"
import classNames from 'classnames/bind';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
          <Link to="/profile/logged">
          <button class="btn btn-outline-success" id="login-btn-nav"type="button">Sign in!</button>
          </Link>
        </form>
      </div>
        </div>
    

  )
}