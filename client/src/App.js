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
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [language, setLanguage] = useState('')
  const [location, setLocation] = useState('')
  const [gender, setGender] = useState('')
  const [mentor, setMentor] = useState(false)
  const [student, setStudent] = useState(true)
  const [silent_buddy, setSilentBuddy] = useState(false)
  const [description, setDescription] = useState('')
  const [interests, setInterests] = useState('')
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
      .then(result => dispatch({ type: SET_USERS, users: result.data }))
      .catch(err => console.log(err.message))

    let full_name = localStorage.getItem('full_name')
    full_name ? setFullName(full_name) : setFullName('')

    let id = localStorage.getItem('id')
    id ? setId(id) : setId('')

    let email = localStorage.getItem('email')
    email ? setEmail(email) : setEmail('')
    
    let language = localStorage.getItem('language')
    language ? setLanguage(language) : setLanguage('')
    
    let location = localStorage.getItem('location')
    location ? setLocation(location) : setLocation('')

    let gender = localStorage.getItem('gender')
    gender ? setGender(location) : setGender('')

    let mentor = localStorage.getItem('mentor')
    mentor ? setMentor(mentor) : setMentor('')

    let student = localStorage.getItem('student')
    student ? setStudent(student) : setStudent('')

    let silent_buddy = localStorage.getItem('silent_buddy')
    silent_buddy ? setSilentBuddy(silent_buddy) : setSilentBuddy('')

    let description = localStorage.getItem('description')
    description ? setDescription(description) : setDescription('')

    let interests = localStorage.getItem('interests')
    interests ? setInterests(interests) : setInterests('')


  }, [])

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/users/' + localStorage.getItem('id')
    }).then(result => {
      
      setUser(result.data.user)
    })
  },[])

  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     url: '/api/users/'
  //   }).then(result => {
      
      
      
  //     setBuddyUser(result.data)
  //   })
  // },[])

// const userList = state.users.map((user) => (
// <li key={user.id} id={user.id}>
//    {user.full_name} 
//    {user.password} 
//    {user.email} 
//    {user.gender} 
//    {user.student} 
//    {user.silent_body} 
//    {user.description} 
//   </li>));
// console.log("userList =" , userList)
  return (
    <Router>
      <div>
        <nav className="App">
          <Navbar user={user} setUser={setUser} />
        </nav>
        <Switch>
        <Route path="/user/:id/edit">
          {Object.keys(user).length && <EditProfile setUser={setUser} />}
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
          <Route path="/search">
            <MainSearch buddyUser={buddyUser}
            setBuddyUser={setBuddyUser}/>
          </Route>
          <Route path="/community">
            <CommunityBoard />
          </Route>
          <Route path="/messages">
            <Messages socket = {socket} fullName = {fullName} messages = {state.messages}/>
          </Route>
          <Route path="/register">
          {!Object.keys(user).length && <Register setUser = {setUser}/>}
          {Object.keys(user).length && <Redirect to="/user/:id"/>}
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