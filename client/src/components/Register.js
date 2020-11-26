import "./register.css"
import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Register(props) {

  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async(user) => {
    
    }
  
  }


  
  return (
    <div>
      <div class="container">
        <div class="jumbotron_register">
          <div class="register_container">
          <form  onSubmit={handleSubmit(onSubmit)}>
            <h1>Be a <i>Buddy!</i></h1>
            <p>Full name:</p>
            <input
              type='text'
              name="fullName"
              ref={register({required: true})}
            />
            
            <p>Email:</p>
            <input
              type='text'
              name="email"
              ref={register({required: true})}
            />
            <p>Password:</p>
            <input
              type='text'
              name="password"
              ref={register({required: true})}
            />
            <p>Confirm password:</p>
            <input
              type='text'
              name="confirmPassword"
              ref={register({required: true})}
            />
            <p></p>

            <button type="submit" class="btn btn-primary">Register!</button>
          </form>
          

          
          
          </div>
        </div>
        </div>

      </div>
  );
  }
  
  
 