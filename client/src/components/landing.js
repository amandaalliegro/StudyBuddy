import React from "react";
import "./landing.css"

export default function Landing(props) {
  return (
    <div>
      <div class="container">
        <div class="jumbotron">
          <h1>Study Buddy</h1>
          <p>Find someone to study with you</p>
          <p>This is some text.</p>
          <p>This is another text.</p>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="card">.Why you need it.</div>
        </div>
        <div class="column">
          <div class="card">.How it works.</div>
        </div>
        <div class="column">
          <div class="card">.Youll love it.</div>
        </div>
        <div class="column">
          <div class="card">.More random text!.</div>
        </div>
      </div>
    </div>

  )
}