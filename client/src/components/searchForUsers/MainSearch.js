import React, { Fragment, useState } from "react";
import "./mainSearch.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';


export default function MainSearch(props) {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  let history = useHistory();
  function onSubmitForm(event) {
    event.preventDefault();
      const newSearch = {
        name: event.target[0].value
      }
      axios.post("/search", newSearch)
      .then(res => {
        setUsers(res.data)
      })
      .catch ((err) => {
        {console.log(err.message);}
      })
  };
  return (
    <div id="body_search">
      {/* Meta Information */}
      <title>Study Buddy - Search page</title>
      {/* External CSS */}
     
        
          
          <div id="search_container" >
            <h1 className="h1"></h1>
            <form id="search_form" onSubmit={onSubmitForm}>
             <input
              type="text"
              name="name"
              id="search_input"
              placeholder="Enter any name/subject name ..."
              value={name}
              onChange={event => setName(event.target.value)}
             />
              <button id="search_button">Search!</button>
            </form>
            {users.length === 0 && <p>No Results Found</p>}
           
          <section>
            <ul>
            <table>
            <thead>
            <tr>
            </tr>
          </thead>
          <tbody >
            {users.map(user => (
              <tr key={user.user_id} id="search_output">
                <div id='chat_card-search'>
                  <div id="image_button">
                <td>
                  <button id="search_button1" onClick ={
                    event => { 
                      console.log("main search button clicked",user)
                      props.setBuddyUser(user)
                      history.push(`/user/buddy`)
                    }  
                  } 
                  >{user.full_name}</button>
                </td>
                <img src={user.img} className="avatar img-circle img-thumbnail" id="avatar-msg"alt="avatar" />
                </div>
                <div id="result">
                <td id="result_item">Subject: {user.subject}</td>
                {user.student &&<td id="result_item" >student</td>}
                {user.mentor &&<td id="result_item" >mentor</td>}
                <td id="result_item">Description: {user.description}</td>
                </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
        
            </ul>
          </section>
          </div>
    </div>
  );
}