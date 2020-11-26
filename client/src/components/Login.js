import { Container, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
import React, { useState } from 'react'

import "./navbar.css"
import { Redirect, useHistory } from 'react-router-dom';


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
        console.log(res.data)
        props.handleCookie(res.data);

        // set state and useHistory
      }
    }).catch(() => {
      setMsg('Email or password incorrect')
    })
  }
  return (

    <Container>
      <div className='login_form'>
        {msg && <Alert variant='danger'>{msg}</Alert>}
        <div className='container login-form-container'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='I agree' />
            </Form.Group>

            <button variant='primary' type='submit' onClick={() => history.push('/home/:id')}>Login</button>;


          </Form>
        </div>
      </div>
    </Container >
  )
}
