import "./register.css"
import React from 'react';
import ReactDOM from 'react-dom';

export default function Register(props) {
   
     
      return (
        <div>
      <div class="container">
        <div class="jumbotron">
        <form>
        <h1>Hello </h1>
        <p>Full name:</p>
        <input
          type='text'
          name='username'
      
        />
        <p>Email:</p>
        <input
          type='text'
          name='age'
          
        />
        <p>Password:</p>
        <input
          type='text'
          name='age'
          
        />
        <p>Confirm password:</p>
        <input
          type='text'
          name='age'
          
        />
        </form>
        <button type="submit" class="btn btn-primary">Register!</button>
        </div>
      </div>
        
        </div>
      );
    }
  
  
 