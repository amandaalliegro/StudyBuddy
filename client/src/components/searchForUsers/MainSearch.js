import React, { Fragment, useState } from "react";
import "./mainSearch.css";
import axios from "axios";
import Results from "./Results.js"


export default function MainSearch(props) {
  console.log("i am main search")
  const [name, setName] = useState("");
  console.log("name in main search",name)
  const [users, setUsers] = useState([]);
  console.log("name in main search",users)

  function onSubmitForm(event) {
    console.log("on sumbit")
    console.log("event =", event)

    event.preventDefault();
      console.log ("i am try")
      const newSearch = {
        name: event.target[0].value,
      }
      axios.post("/search", newSearch)
      .then(res => {
        setUsers(res.data)
        console.log("res.data",res.data)
        console.log("here is the get axios consolelog")
        
      })
      // const parseResponse = await response.json();
      // console.log(parseResponse, "PARSE RESPONSE")
      // setUsers(parseResponse);
      .catch ((err) => {
      {console.log(err.message);}
      })
  };
  return (
    <div>
      {/* Meta Information */}
      <title>Study Buddy - Search page</title>
      {/* External CSS */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" type="text/css" />
      <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Source+Sans+Pro:ital,wght@1,400;1,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Source+Sans+Pro:ital,wght@1,400;1,700&display=swap" rel="stylesheet" />
      {/* App CSS */}
      <link rel="stylesheet" href="/styles/layout.css" type="text/css" />
      <link rel="stylesheet" href="/styles/nav.css" type="text/css" />
      <link rel="stylesheet" href="/styles/header.css" type="text/css" />
      <link rel="stylesheet" href="/styles/new-tweet.css" type="text/css" />
      <link rel="stylesheet" href="/styles/tweet-section.css" type="text/css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <style dangerouslySetInnerHTML={{ __html: "\n* {box-sizing: border-box;}\n\nbody {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.topheader {\n  overflow: hidden;\n  background-color: blue;\n}\n\n.topheader a {\n  float: left;\n  display: block;\n  color: black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 50px;\n}\n\n.topheader a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n.topheader a.active {\n  background-color: #2196F3;\n  color: white;\n}\n\n.topheader input[type=text] {\n  float: centre;\n  padding: 6px;\n  margin-top: 8px;\n margin-bottom: 8px;\n margin-left: 8px;\n margin-right: 16px;\n  border: none;\n  font-size: 17px;\n}\n\n@media screen and (max-width: 600px) {\n  .topheader a, .topheader input[type=text] {\n    float: none;\n    display: block;\n    text-align: left;\n    width: 100%;\n    margin: 0;\n    padding: 14px;\n  }\n  \n  .topheader input[type=text] {\n    border: 1px solid #ccc;  \n  }\n}\n" }} />

     
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
          
          <section className="tweets-section" id="tweets-container">
            <ul id="forth">
            <table className="table my-5">
          <thead>
            <tr>
             
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.user_id}>
                <td>{user.email}</td>
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