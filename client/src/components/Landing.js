import React from "react";
import "./landing.css"
import AboutUs from './AboutUs';
import { Link } from "react-router-dom";

import classNames from 'classnames/bind';
import FindAMentor from "./FindAMentor";
import StudyTogether from "./StudyTogether";

export default function Landing(props) {
  const {user} = props;
  function handleSubmit(event) {
    event.preventDefault()
    
  }
  return (
    <div id='landing-bd'>
      <div class="container" >
        <div class="jumbotron" id="#jumbo">
          <div id="#brand_box">
          <h1 id="font-size-brand"><b>Study Buddy</b></h1>
          <p id="subtitle_brand"><b><i>Study Together!</i></b></p>
          <Link to="/register">
          {!user.full_name && <button type="button" className="btn btn-primary edit_btn" id="btn_register" href="/register">Register!</button>}
          </Link>
          </div>
        </div>
      </div>
      <div class="row" id="body_landing-container">
      
        <div class="column">
          <a href="#AboutUs"></a>
          <div class="card" onClick={handleSubmit}><a href="#AboutUs"><b>About us</b></a>
        
          <p><img src="./about_us.png" class="img-fluid"></img></p>
          </div>
          
        </div>
        <div class="column">
          <div class="card"><b>Find a mentor!</b> 
          <p><img src="./apple_mentor.png" class="img-fluid"></img></p>
          
          </div>
        </div>
        <div class="column">
          <div class="card"><b>Study together!</b>
          <p><img src="./study_together.png" class="img-fluid"></img></p>
          </div>
          
        </div>
      </div>
      <div id='topics-box'>
      <div id='img-icon'>
        <p><img src='you-learn.png'></img></p>
        </div>
      <div id='topics'>
        <h1>You learn</h1>
        <p>Two (or more) heads are always better than one!</p>
      </div>
      
      
      </div>
      <div id='about-bd'>
    <h1 id='title-abt'>
    <a id='AboutUs'>About Us</a></h1>
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
      <div id='topics-box'>
      <div id='img-icon-own'>
        <p><img src='own-it.png'></img></p>
        </div>
      <div id='topics'>
        <h1>You Own it</h1>
        <p>Improve your confidence!</p>
      </div>
      </div>
      <FindAMentor/>
      <div id='topics-box'>
      <div id='img-icon-own'>
        <p><img src='std-tgt.png'></img></p>
        </div>
      <div id='topics'>
        <h1>You Share it</h1>
        <p>You can be the difference!</p>
      </div>
      </div>
      <StudyTogether/>
    </div>

  ) 
}