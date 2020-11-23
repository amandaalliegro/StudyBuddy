import React from "react";
import "./navbar.css"

export default function Navbar (props) {
  return (
    <div class="topnav">
  <a class="active" href="#home">Study<b>Buddy</b></a>
  <a href="#logged">Logged as </a>
  <a href="#dm">DM</a>
  <a href="#logout">Logout</a>
</div>
  )
}