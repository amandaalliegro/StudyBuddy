import React, { Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./mainSearch.css";
import axios from "axios";
import Results from "./Results.js"



export default function MainSearch(props) {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [roomName, setRoomName] = React.useState("");
  // set rooom state
  const [rooms, setRooms] = useState([]);
 // when a user creates a new room => axios posts the room name and the user id of its creator to the db
  const handleRoomNameChange = (event) => {
    event.preventDefault()
    axios.post('/room_chat', { user_id: localStorage.getItem('id'), roomName: roomName})
    .then((result) => {
      console.log("result front end", result)
// sets state to previous state plus new addition (prev"Statename") => [...prev"statename"])
      setRooms((prevrooms) =>[...prevrooms, result.data])
    })
  };
// search bar
  function onSubmitForm(event) {

    event.preventDefault();
    const newSearch = {
      name: event.target[0].value,

    }
    axios.post("/search", newSearch)
      .then(res => {
        setUsers(res.data)
      })
      .catch((err) => {
        { console.log(err.message); }
      })
    
  };
// use effect for created chat room list 
  useEffect(() => {
    // axios to get all the created rooms from the db by user id
    axios({
      method: 'GET',
      url: 'http://localhost:3005/room_chat',
      headers: {
        user_id: localStorage.getItem("id") 
      }
    // then take the result and set that result.data as the new rooms array state. 
    }).then(result => {
      console.log("res", result.data)
      setRooms(result.data)
    })
  },[])


  // create useEffect that contains an axios.get to "room_chat", useEffect is dependent upon [rooms], setRooms to result

  // create db function that fetches all rooms (or all rooms belonging to user iD) (models/index.js)

  // create express router.get(/room_chat) that calls db function

  // BACK TO FRONT END: inside axios.get's .then() set state.rooms to result of get call

  // map over state.rooms to populate room list of react route links 
//   <Link to={{
//    pathname: '/messages',
//    state: {
//      roomId: roomId
//    }
//  }}>{room.name}</Link>
  // 
  return (
    <div>


      <body className="container text-center"> {/* keep body tag in index.html, remove any body tags from react component*/}
        <header>
          <h1 className="my-5">Party List{props.fullName}</h1>
          <form className="d-flex" onSubmit={onSubmitForm}>
            <input
              type="text"
              name="name"
              placeholder="Enter any name/subject name ..."
              className="form-control"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </header>
        <section>
          <form className="home-container" onSubmit={handleRoomNameChange}>
            <input
              name="roomName"
              type="text"
              placeholder="Room"
              value={roomName}
              className="text-input-field"
              onChange={(event) => setRoomName(event.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Create Room
            </button> 
          </form>
        </section>
        <section>
          <table>
            <tbody className="table my-5">
              {users.map(user => (
                <tr key={user.user_id}>
                  <td>Name: {user.full_name}</td>
                  <td>Subject: {user.subject}</td>
                  <td>Description: {user.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul>
            {users.length === 0 && <p></p>}
          </ul>
        </section>
        { rooms && <section>
          <table>
            {/* set a link on each chat room so what when click => it takes you to that roomName state */}
            <tbody className="table my-5">
              {rooms.map(r => 
              <div key= {r.id}>
                <Link to= {{
                  pathname: '/messages',
                  state: {room: r.name}
                }}>{r.name}</Link>
              
            </div>)}
            
            </tbody>
          </table>
        </section>}
      </body>
    </div>
  );
}