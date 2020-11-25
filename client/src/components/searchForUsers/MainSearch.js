import React from "react";
import Results from "./Results.js"
export default function MainSearch(props) {
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

      <main className="container">
        {/* tweet input section */}
        <body className="new-tweet">
          <header>
          <h2>Search for Buddies!</h2>
          <div className="topheader">

            <input type="text" placeholder="Write any name or subject to find !" />
            <button type="submit"><i className="fa fa-search" /></button>
          </div>
          </header>
          <div>
            <style dangerouslySetInnerHTML={{ __html: "\n  #forth {\n    background: #ffdedb;\n    padding: 10px;\n    border: 3px solid red;\n    margin: 20px;\n    /* list-style-position: inside; */\n    /* list-style-type: none; */\n  }\n  #forth li {\n    background: #e1ffd1;\n    padding: 10px;\n    border: 3px solid green;\n    margin: 20px;\n  }\n" }} />
            <ul id="forth">
              <li><Results /></li>
              <li><Results /></li>
            </ul>
          </div>
          <section className="tweets-section" id="tweets-container">
          </section>
        </body>
      </main>
    </div>
  );
}