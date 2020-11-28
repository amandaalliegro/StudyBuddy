import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [socket, setSocket] = useState(null);
  const { state, dispatch } = useApplicationData();
  const [fullName, setFullName] = useState('')

  function handleCookie(key) {
    setCookie("user", key, {
      path: "/"
    });
  }

  useEffect(() => {
    // socket server '/'
    const socket = new WebSocket('ws://localhost:3005');
    setSocket(socket);
    socket.onopen = () => console.log("Connected to server")

    socket.onmessage = event => {
      const message = JSON.parse(event.data);
      console.log(message)
      dispatch({type: SET_MESSAGE, message})
    }
    socket.onclose = () => console.log('disconected from server')
    socket.onerror = (err) => console.log(err)
    // return () => {
    //   socket.onclose();
    
    // };
    
  }, [])





  useEffect(() => {
    // this is how you talk to the backend
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

  const userList = state.users.map((user) => (<li key={user.id}> {user.first_name} {user.last_name} {user.email}</li>));


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
          <Route path="/profile/edit">
            <EditProfile />
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
            <Messages socket = {socket} fullName = {fullName} messages = {state.messages}/>
          </Route>
          <Route path="/register">
            <Register />
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