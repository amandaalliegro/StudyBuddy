import React, { Fragment, useState } from "react";
import "./mainSearch.css";
import axios from "axios";
import Results from "./Results.js"


export default function MainSearch(props) {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  // const {user} = props;

  function onSubmitForm(event) {
    event.preventDefault();
      const newSearch = {
        name: event.target[0].value,

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
    <div>
      
     
        <body className="container text-center">
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
              <button className="btn btn-success">Submit</button>
            </form>
          </header>
          <section>
            <ul>
            <table>
            <thead>
            <tr>
            </tr>
          </thead>
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
        {users.length === 0 && <p>No Results Found</p>}
            </ul>
          </section>
        </body>
     
    </div>
  );
}