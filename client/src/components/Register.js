import "./register.css"
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Register(props) {
  return (
    <div>
      <div class="container">
        <div class="jumbotron_register">
          <div class="register_container">
          <form>
            <h1>Be a <i>Buddy!</i></h1>
            <p>Full name:</p>
            <input
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
            <p>Confirm password:</p>
            <input
              type='text'
            />
          </form>
<<<<<<< HEAD
         </div>/<button type="submit" class="btn btn-primary">Register!</button>
         
=======
          <Link to="/profile/edit">

          <button type="submit" class="btn btn-primary">Register!</button>
          </Link>
          </div>
>>>>>>> master
        </div>
        </div>

      </div>
  );
    };
  
  
 