import { Container, Form, Alert } from 'react-bootstrap'
import axios from 'axios';
import React, { useState } from 'react'

import "./login.css"

import "./navbar.css"
import { useHistory } from 'react-router-dom';


export default function Login(props) {
  let history = useHistory();
  const [msg, setMsg] = useState(null)
  function handleSubmit(event) {
    event.preventDefault()
    const newUser = {
      email: event.target[0].value,
      password: event.target[1].value
    }
    axios.post('/login', newUser).then((res) => {
      if (res.status === 200) {
        
          localStorage.setItem("id", res.data.id)
          
          props.setUser(res.data) 
        
        // set state and useHistory
      }
    }).catch((err) => {
      console.log("error on post", err)
      setMsg('Email or password incorrect')
    })
  }
  return (

    <Container id='login_container'>
      <div id='login_form'>
        {msg && <Alert variant='danger'>{msg}</Alert>}
        <div id='login_form'>
          <Form id='login_form' onSubmit={handleSubmit}>
            <Form.Group  id='login_email' controlId='formBasicEmail'>
              <Form.Label id='login_email1' >Email:</Form.Label>
              <Form.Control id='login_input'type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group id='login_password' controlId='formBasicPassword'>
              <Form.Label id='login_password1' >Password:</Form.Label>
              <Form.Control id='login_input'type='password' placeholder='Password' />
            </Form.Group>
            <button id='login_button' variant='primary' type='submit' onClick={() => history.push('/home/:id')}>Login</button>
          </Form>
        </div>
      </div>
    </Container >
  )
}
