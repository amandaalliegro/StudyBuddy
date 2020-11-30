import React from 'react'
import "./navbar.css"
import Login from './Login'
export default function Navbar(props) {
  //console.log("heres your props", props.full_name)
  const logOut = () => {
    localStorage.removeItem('id')
    props.setFullName('')
  }
  const {user} = props;
  return (
    
<div class='topnav'>
      <a class='active brand_text' id='#font_jumbo' href='/home'>Study<b>Buddy</b></a>
      {user.full_name && <a href='/profile'>Logged as</a>}
      {user.full_name && <a href='/dm'>DM</a>}
      {user.full_name &&<a href='/' onClick={logOut} >Logout</a>}
      <div id='login_nav'>
     <div>
       {!user.full_name && <Login user={user} setUser={props.setUser}/>}
       {user.full_name && <p>Logged in as: {user.full_name}</p>}
     </div>
    </div>
    </div>
  )
}