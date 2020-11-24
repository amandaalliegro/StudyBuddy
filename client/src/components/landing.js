import React from "react";
import "./landing.css"

import classNames from 'classnames/bind';

export default function Landing(props) {
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm
  });
  return (
    <div>
      <div class="container">
        <div class="jumbotron" id="#jumbo">
          <div id="#brand_box">
          <h1 id="font-size-brand"><b>Study Buddy</b></h1>
          <p id="subtitle_brand">Study Together!</p>
          <button className={buttonClass}>
          <a href="/register">Create a profile! </a>
          </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="card"><b>About us</b>
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
    </div>

  )
}