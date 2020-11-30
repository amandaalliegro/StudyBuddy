import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import useApplicationData from './hooks/useApplicationData';
import './App.css';
import { SET_USERS, SET_MESSAGE } from './reducers/dataReducer';
import Navbar from './components/Navbar.js';
import Landing from './components/Landing.js';
import Register from './components/Register.js'
import Profile from './components/Profiles.js';
import EditProfile from './components/EditProfile.js';
import UserProfile from './components/UserProfile.js';
import Logged from './components/Logged.js';
import Login from './components/Login'
import Messages from './components/Messages.js';
import CommunityBoard from './components/community board/CommunityBoard.js';
import MainSearch from './components/searchForUsers/MainSearch';


function App(props) {
  // set states 
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [socket, setSocket] = useState(null);
  const { state, dispatch } = useApplicationData();
  const [fullName, setFullName] = useState('')
  const [id, setId] = useState('')

  function handleCookie(key) {
    setCookie("user", key, {
      path: "/"
    });
  }

  // for messages.js
  useEffect(() => {

    const socket = new WebSocket('ws://localhost:3005');
    setSocket(socket);
    socket.onopen = () => console.log("Connected to server")

    socket.onmessage = event => {
      const message = JSON.parse(event.data);
      dispatch({ type: SET_MESSAGE, message })

    }

    socket.onclose = () => console.log('disconected from server')
    socket.onerror = (err) => console.log(err)

  }, [])



  useEffect(() => {

    axios({
      method: 'GET',
      url: '/api/users'
    })
      // then. set state function (result => dispatch)result is what server gives back (res)
      .then(result => dispatch({ type: SET_USERS, users: result.data }))
      .catch(err => console.log(err.message))

    let full_name = localStorage.getItem('full_name')
    full_name ? setFullName(full_name) : setFullName('')

  }, [])
// // for profile inormation 
//   useEffect(() => {

//     axios({
//       method: 'GET',
//       url: '/api/users'
//     })
//       .then((getUserByEmail(localStorage.getItem('full_name'))) => {
//         console.log('test response', response.data)
//       })
//       .catch(err => console.log(err))
//   }, [])

  return (
    <Router>
      <div>
        <nav className="App">
          <Navbar fullName={fullName} setFullName={setFullName} />
        </nav>
        <Switch>
          <Route path="/profile/user_id">
            <UserProfile />
          </Route>
          <Route path="/user/:id">
            <EditProfile id={id} />
          </Route>
          <Route path="/home/:id">
            <Logged />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/search">
            <MainSearch />
          </Route>
          <Route path="/community">
            <CommunityBoard />
          </Route>
          <Route path="/messages">
            <Messages socket={socket} fullName={fullName} messages={state.messages} />
          </Route>
          <Route path="/register">
            {!fullName && <Register setFullName={setFullName} />}
            {fullName && <Redirect to="/user/:id" />}
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>

  );
};
export default App;