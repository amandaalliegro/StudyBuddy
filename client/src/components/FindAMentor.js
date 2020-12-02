import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
export default function FindAMentor() {
return (
  <div id='about-bd'>
    <h1 id='title-abt'>Find a Mentor</h1>
     <div id='about-txtf'>
       <div id='text-img'>
     <img id='mentor-img' src='mentor.jpeg'/>
       <div>
        <p><b>StudyBuddy</b> is a community where you can find mates looking to share their skills.</p> 
        <p>Here in the <b>StudyBuddy</b> community, we believe you can learn from anyone, anywhere, <b>But</b> more importatly you have expertise that others seek.</p>
        <p></p>
        <p>Having the ability to share your knowlege with the world can be very rewarding and thats what being a <b>StudyBuddy</b> is all about. Learn something new and share that knowledge with others just starting thier journey, you'll love it!</p>
        <p>Becoming a mentor is as easy as finding one.</p>
        </div>
      </div>
        <p>Don't be shy...  Join a Study Group and start learning something new!</p>
      </div>
  </div>
)
}