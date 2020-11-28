import React from "react";
import "./logged.css"
import classNames from 'classnames/bind';

export default function Logged(props) {
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm
  });
  return (
    <div>
      <div class="container" >
        <div class="jumbotron" id="jumbo-logged">
          <div id="#brand_box">
          <h1 id="font-size-brand"><b>Study Buddy</b></h1>
          <p id="subtitle_brand"><b><i>Lets Study Together!</i></b></p>
          </div>
        </div>
      </div>
      <div class="row" id="body_container">
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