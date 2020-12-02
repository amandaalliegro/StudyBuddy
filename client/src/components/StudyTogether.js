import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
export default function StudyTogether() {
return (
  <div id='about-bd'>
    <h1 id='title-abt'>Study Together</h1>
     <div id='about-txt-std'>
       <div>
        <p><b>StudyBuddy</b> is a community built around groups of interests.</p> 
        <p>Study groups are the heart of the community. When people come together to learn, anything is achievable.</p>
        <p>Be a <b>Buddy</b> and help build a community of knowledge!</p>
      </div>
      <img id='std-together-img' src='04.jpg'/>
      </div>
  </div>
)
}