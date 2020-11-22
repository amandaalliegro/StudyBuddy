import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useApplicationData from './hooks/useApplicationData';
import './App.css';
import { SET_USERS } from './reducers/dataReducer';




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
    <h1> Users </h1>

    <ul> {userList} </ul>
  </div >
  );
}

export default App;
