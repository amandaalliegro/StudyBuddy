import React from "react";
import "./navbar.css"

export default function Navbar(props) {
  return (
    <div className="topnav">
      <a className="active" href="/home">Study<b>Buddy</b></a>
      <a href="/profile">Logged as</a>
      <a href="/dm">DM</a>
      <a href="/">Logout</a>
      <form>
        <input
          type="text"
          placeholder="Email"
        />
        <input
          type="text"
          placeholder="Password"
        />
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
        </div>
  )
}