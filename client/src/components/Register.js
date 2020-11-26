import "./register.css";
import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Axios from "axios";
// inside component -> helper functions 
export default function Register(props) {
  // let x = Math.random().toString().slice(2)
  // const [userInput, setUserInput] = useState({full_name: "joe L", email: `j${x}@gmail.com`, password: 1234 })
  const [userInput, setUserInput] = useState({})
  const setFullName = function(event) {
    let full_name = "joe"
    setUserInput(prev => ({...prev, full_name}))
  }
  
  const setEmail = function(event) {

  }

  const setPassword = function(event) {

  }

  const set
  const infoSubmit = function() {
    console.log("hello", userInput)
    axios.post('/api/users', userInput)
// decide good or bad. link to page if good. if bad. do something 
// react router redirect thing 
  }
  return (
    <div>
      <div class="container">
        <div class="jumbotron_register">
          <div class="register_container">
          <form>
            <h1>Be a <i>Buddy!</i></h1>
            <p>Full name:</p>
            <input onChange={setFullName} value={userInput.full_name}
              type='text'
            />
            <p>Email:</p>
            <input 
              type='text'
            />
            <p>Password:</p>
            <input
              type='text'
            />
           {/* should remove password confirm */}
            <p>Confirm password:</p>
            <input
              type='text'
            />
          </form>
          <button onClick={infoSubmit} type="submit" class="btn btn-primary">Register!</button>
          {/* move and change */}
          <Link to="/profile/edit">

          </Link>
          </div>
        </div>
        </div>

      </div>
  );
    };
  
  
 