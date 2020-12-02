import { Container, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
import React, { useState } from 'react'
import './register.css'
import { Redirect, useHistory } from 'react-router-dom';
export default function Register(props) {
  let history = useHistory();
  const {user} = props;
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault()
    const newUser = {
      full_name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value
    }
    if (newUser.password.length < 1) {
      setError('Password cant be empty')
    } else if (newUser.full_name.length < 2) {
      setError('Enter at least 2 charachter')
    } else {
      setError(null)
      axios.post('/api/users', newUser).then((res) => {
        if (res.status === 200) {
          localStorage.setItem("id", res.data.id)
          props.setUser(res.data) 
        }
      }).catch((err) => {
        setError('This email is used')
      })
    }
  }
  
  return (
    <Container>
      <div class='container'>
        <div class='jumbotron_register'>
          <div class='register_container'>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <h2>Be a Buddy!</h2>
            <Form.Group id='setname-form'>
              <Form.Label id='setname-form'>Full Name:</Form.Label>
              <Form.Control type='text' placeholder='Username' />
              <Form.Text className='text-muted'>
    </Form.Text>
            </Form.Group>
            <Form.Group id='setname-form'>
              <Form.Label id='setname-form'>Email:</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
    </Form.Text>
            </Form.Group>
            <Form.Group id='setname-form'>
              <Form.Label id='setname-form'>Password:</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <button variant='primary' id='register-btn' type='submit' > Register!</button>  </Form>
        </div>
        </div>
        </div>
    </Container>
  );
    };
    