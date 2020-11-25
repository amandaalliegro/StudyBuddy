import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import useApplicationData from './hooks/useApplicationData';
import './App.css';
import { SET_USERS } from './reducers/dataReducer';
import Navbar from './components/navbar.js';
import Landing from './components/landing.js';
import Register from './components/register.js'
import Profile from './components/profile.js';
import EditProfile from './components/editProfile.js';
import UserProfile from './components/UserProfile.js';

import Messages from './components/Messages.js';
import CommunityBoard from './components/community board/CommunityBoard.js';
import MainSearch from './components/searchForUsers/MainSearch';



function App() {

  const { state, dispatch } = useApplicationData();

  useEffect(() => {

    axios({
      method: 'GET',
      url: '/api/users'
    })
      .then(result => dispatch({ type: SET_USERS, users: result.data }))
      .catch(err => console.log(err.message))

  }, [])
  const userList = state.users.map((user) => (<li key={user.id}> {user.first_name} {user.last_name} {user.email}</li>));


  return (
    <Router>
      <div>
        <nav className="App">
          <Navbar/>
        </nav>
        <Switch>
        
          <Route path="/profile/user_id">
            <UserProfile />
          </Route>
          <Route path="/profile/edit">
            <EditProfile />
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
            <Messages />
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
}

export default App;
