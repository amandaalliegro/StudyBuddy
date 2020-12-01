import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

export default function AboutUs() {
  
    
  
return (
  <div id='about-bd'>
    <h1 id='title-abt'>About Us</h1>
     <div id='about-txt'>
       <div>
        <p><b>Study buddy</b> is a community where you can find mates to study together.</p> 
        <p>You and your <b><i>buddies</i></b> will be able to find each other by doing a search using names or your interests in common. You can start a conversation and decide to go forward with the study and even add other people on the chat and have a group.</p>
        <p>Set yourself as a student, mentor, or even silent student and enjoy our community by making your contributions on the chats!</p>
        <p>Be a <b>Buddy</b>, help us to build well-structured knowledge!</p>
      </div>
      <img id='together-img' src='02.jpg'/>
      </div>
  </div>
  
)
}
