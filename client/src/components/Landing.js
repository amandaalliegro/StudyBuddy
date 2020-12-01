import React from "react";
import "./landing.css"
import AboutUs from './AboutUs';
import { Link } from "react-router-dom";

import classNames from 'classnames/bind';

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
          <div class="card" onClick={handleSubmit}><b>About us</b>
        
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
      <AboutUs/>
    </div>

  ) 
}