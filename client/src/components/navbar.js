import React from "react";
import "./navbar.css"

export default function Navbar(props) {
  return (
    <div className="topnav">
      <a className="active" href="#home">Study<b>Buddy</b></a>
      <a href="#logged">Logged as </a>
      <a href="#logged">Logged as </a>
      <a href="#dm">DM</a>
      <a href="#logout">Logout</a>
      <form>
        <input
          type="text"
        />
        <input
          type="text"
        />
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
        </div>
  )
}