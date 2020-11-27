import { Container, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
import React, { useState } from 'react'
import './register.css'
export default function Register(props) {
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
      axios.post('/', newUser).then((res) => {
        props.handleCookie(res.data)
        props.setLoggedIn(true)
      }).catch((err) => {
        setError('This email is used')
      })
    }
  }
  return (
    <Container>
      <div class="container">
        <div class="jumbotron_register">
          <div class="register_container">
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <h1>Be a <i>Buddy!</i></h1>
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name:</Form.Label>
              <Form.Control type="text" placeholder="Username" />
              <Form.Text className="text-muted">   
    </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">               
    </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>        
            <Button variant="primary" type="submit">
              Register
  </Button>
  </Form>       
        </div>
        </div>
        </div>
    </Container>
  );
    };

    
