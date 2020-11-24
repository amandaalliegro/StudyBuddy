import React, { useEffect, useState } from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router";
import axios from 'axios';
import useApplicationData from './hooks/useApplicationData';
import './App.css';
import { SET_USERS } from './reducers/dataReducer';
import Navbar from './components/navbar.js'
import Home from './containers/Home.js'
import Register from './containers/register.js'




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


  return (<div className="App" >
    <Router>
      <Switch>
        
        <Route path="/">                         <Home />        </Route>
      
      </Switch>
    </Router>
  </div >
  );
}

export default App;
