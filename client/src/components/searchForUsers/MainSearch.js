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
     
        
          
          <dev id="search_container" >
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
            </dev>
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
                <td>
                  <button onClick ={
                    event => { 
                      console.log("main search button clicked",user)
                      props.setBuddyUser(user)
                      history.push(`/user/buddy`)
                    }  
                  } 
                  >{user.full_name}</button>
                </td>
                <td>Subject: {user.subject}</td>
                <td>Description: {user.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && <p>No Results Found</p>}
            </ul>
          </section>
     
    </div>
  );
}