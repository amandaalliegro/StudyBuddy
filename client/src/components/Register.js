import { Container, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
import React, { useState } from 'react'
import './register.css'
import { Redirect, useHistory } from 'react-router-dom';
export default function Register(props) {
  let history = useHistory();
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
          //props.handleCookie(res.data);
          localStorage.setItem("full_name", res.data.full_name)
          localStorage.setItem("id", res.data.id)
          localStorage.setItem("email", res.data.email)
          localStorage.setItem("language", res.data.language)
          localStorage.setItem("location", res.data.location)
          localStorage.setItem("gender", res.data.gender)
          localStorage.setItem("mentor", res.data.mentor)
          localStorage.setItem("student", res.data.student)
          localStorage.setItem("silent_buddy", res.data.silent_buddy)
          localStorage.setItem("interests", res.data.interests)
          localStorage.setItem("description", res.data.description)

          props.setFullName(res.data.full_name) 
          props.setId(res.data.id) 
          props.setEmail(res.data.email)
          props.setLanguage(res.data.language)
          props.setLocation(res.data.location)    
          props.setGender(res.data.gender)
          props.setMentor(res.data.mentor)
          props.setStudent(res.data.student)
          props.setSilentBuddy(res.data.silent_buddy)    
          props.setInterests(res.data.interests)
          props.setDescription(res.data.description) 


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
            <h1>Be a <i>Buddy!</i></h1>
            <Form.Group controlId='formBasicName'>
              <Form.Label>Full Name:</Form.Label>
              <Form.Control type='text' placeholder='Username' />
              <Form.Text className='text-muted'>
    </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email:</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
    </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password:</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <button variant='primary' type='submit' > Register!</button>  </Form>
        </div>
        </div>
        </div>
    </Container>
  );
    };
    