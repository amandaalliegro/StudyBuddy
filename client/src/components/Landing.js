import React from "react";
import "./landing.css"
import AboutUs from './AboutUs';
import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import FindAMentor from "./FindAMentor";
import StudyTogether from "./StudyTogether";
export default function Landing(props) {
  const {user} = props;
  function handleClickAbout(event) {
    event.preventDefault()
    if (event) {
      window.scrollTo(0, 1000);
    }
  }
  function handleClickFind(event) {
    event.preventDefault()
    if (event) {
      window.scrollTo(0, 1900);
    }
  }

  function handleClickTogether(event) {
    event.preventDefault()
    if (event) {
      window.scrollTo(0, 3000);
    }
  }


function handleClickUp(event) {
  event.preventDefault()
  if (event) {
    window.scrollTo(0, 0);
  }
}

  return (
    <div id='landing-bd'>
      <div class="container" >
        <div class="jumbotron" id="#jumbo">
          <div id="#brand_box">
          <img id='logoStuddy' src='StudyBuddyLogo_2.png'/>
          <p id="subtitle_brand"><b><i>Study Together!</i></b></p>
          <Link to="/register">
          {!user.full_name && <button type="button" className="btn btn-primary edit_btn" id="btn_register" href="/register">Register!</button>}
          </Link>
          </div>
        </div>
      </div>
      <div class="row" id="body_landing-container">
      
        <div class="column">
          
          <div class="card" onClick={handleClickAbout}><b>About us</b>
        
          <p><img src="./about_us.png" class="img-fluid"></img></p>
          </div>
          
        </div>
        <div class="column">
          <div class="card"onClick={handleClickFind} ><b>Find a mentor!</b> 
          <p><img src="./apple_mentor.png" class="img-fluid"></img></p>
          
          </div>
        </div>
        <div class="column">
          <div class="card"onClick={handleClickTogether} ><b>Study together!</b>
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
      <AboutUs />
      <div id='topics-box'>
      <div id='img-icon-own'>
        <p><img src='own-it.png'></img></p>
        </div>
      <div id='topics'>
        <h1>You Own it</h1>
        <p>Improve your confidence!</p>
      </div>
      </div>
      <FindAMentor />
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