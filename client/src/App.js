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
import Messages from './components/Messages.js';
import CommunityBoard from './components/community board/CommunityBoard.js';
import MainSearch from './components/searchForUsers/MainSearch';
function App(props) {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [socket, setSocket] = useState(null);
  const { state, dispatch } = useApplicationData();
  const [fullName, setFullName] = useState('')
  
  // sets state and gets setUser data from login.js
  const [user, setUser] = useState({})
  const [buddyUser, setBuddyUser] = useState({})

// console.log("id",id)
// console.log("user",user.id)
// console.log("props.users",props.users)

  console.log("body user from app .js", buddyUser)
  function handleCookie(key) {
    setCookie("user", key, {
      path: "/"
    });
  }
const [isLoading, setIsLoading] = useState('')

  
  useEffect(() => {
    // socket server '/'
    const socket = new WebSocket('ws://localhost:3005');
    setSocket(socket);
    socket.onopen = () => console.log("Connected to server")
    socket.onmessage = event => {
      const message = JSON.parse(event.data);
      dispatch({type: SET_MESSAGE, message})
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
    
  }, [])
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/users/' + localStorage.getItem('id')
    }).then(result => {
      
      setUser(result.data.user)
    })
  },[])

  return (
    <Router>
      <div id='app_body'>
        <nav className="App">
          <Navbar user={user} setUser={setUser} />
        </nav>
        <Switch>
        <Route path="/user/:id/edit">
          {Object.keys(user).length && <EditProfile user={user} setUser={setUser} />}
          {!Object.keys(user).length && <Redirect to="/profile"/>}
          </Route>
          <Route path="/user/buddy">
            <UserProfile buddyUser = {buddyUser} setBuddyUser = {setBuddyUser}/>
          </Route>
          <Route path="/home/:id">
            <Logged />
          </Route>
          <Route path="/profile">
            <Profile user={user}
            setUser={setUser} />
          </Route>
          
          <Route path="/search" render={({match, history}) => 
            <MainSearch
              user={user}
              setUser={setUser}
              history={history}
              buddyUser={buddyUser}
              setBuddyUser={setBuddyUser}
            />
          } />
          
          <Route path="/community">
            <CommunityBoard />
          </Route>
          <Route path="/messages" render={({match, history}) => 
            <Messages
              socket={socket}
              fullName={fullName}
              messages={state.messages}
              history={history}
            />
            }/>
            
          <Route path="/register">
          {!Object.keys(user).length && <Register setUser = {setUser}/>}
          {Object.keys(user).length && <Redirect to="/user/:id"/>}
          </Route>
          <Route path="/">
            <Landing user={user} setUser={setUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;