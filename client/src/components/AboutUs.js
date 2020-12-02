import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
export default function AboutUs() {
return (
  <div id='about-bd'>
    <h1 id='title-abt'>
    <a id='AboutUs'>About Us</a></h1>
     <div id='about-txt'>
       <div>
        <p><b>StudyBuddy</b> Is a community of knowledge! </p> 
        <p>Study together with like-minded people from all over and share your skills with the world. </p>
        <p>Create your own study group or join one within the community.</p>
        <p>Find a <b>StudyBuddy</b> and help us build a community of shared knowledge!</p>
      </div>
      <img id='together-img' src='02.jpg'/>
      </div>
  </div>
)
}