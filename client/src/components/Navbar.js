import { Container, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios';
import React, { useState } from 'react'
import "./navbar.css"
import Login from './Login'

export default function Navbar(props) {
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
      }
    }).catch(() => {
      setMsg('Email or password incorrect')
    })
  }
  return (
    
<div class='topnav'>
      <a class='active brand_text' id='#font_jumbo' href='/home'>Study<b>Buddy</b></a>
      <a href='/profile'>Logged as</a>
      <a href='/dm'>DM</a>
      <a href='/'>Logout</a>
      <div id='login_nav'>
     <div>
       <Login/>
     </div>
    </div>
    </div>

  )
}