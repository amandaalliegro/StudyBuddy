import React from 'react'
import "./navbar.css"
import Login from './Login'

export default function Navbar(props) {

  const logOut = () => {
    localStorage.removeItem('full_name')
    props.setFullName('')
  }

  return (

    <div class='topnav'>
      <a class='active brand_text' id='#font_jumbo' href='/home'>Study<b>Buddy</b></a>
      {props.fullName && <a href='/profile'>Logged as</a>}
      {props.fullName && <a href='/dm'>DM</a>}
      {props.fullName && <a href='/' onClick={logOut} >Logout</a>}
      <div id='login_nav'>
        <div>
          {!props.fullName && <Login fullName={props.fullName} setFullName={props.setFullName} />}
          {props.fullName && <p>Logged in as: {props.fullName}</p>}
        </div>
      </div>
    </div>
  )
}