import React from "react";
import Post from "./Post.js"
export default function CommunityBoard(props) {
  return (
    <div>
      {/* Meta Information */}
      <title>Study Buddy - community page</title>
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
      
     
      <main className="container">
        {/* tweet input section */}
        <section className="new-tweet">
          <h2>Our Happy Community!</h2>
          <div id="error-msg" hidden>
            <i className="fa fa-times-circle" />
          </div>
          <form method="POST" action="/community" id="tweet-submit">
            <textarea name="text" id="tweet-text" placeholder="write here!" defaultValue={""} />
            <div className="char-counter">
              <button type="submit">Post</button>
              <output name="counter" className="counter" htmlFor="tweet-text">140</output>
            </div>
          </form>
          
          <div>
        <style dangerouslySetInnerHTML={{__html: "\n  #forth {\n    background: #ffdedb;\n    padding: 10px;\n    border: 3px solid red;\n    margin: 20px;\n    /* list-style-position: inside; */\n    /* list-style-type: none; */\n  }\n  #forth li {\n    background: #e1ffd1;\n    padding: 10px;\n    border: 3px solid green;\n    margin: 20px;\n  }\n" }} />
        <ul id="forth">
          <li><Post/></li>
          <li><Post/></li>
        </ul>
      </div>
          <section className="tweets-section" id="tweets-container">
          </section>
        </section>
      </main>
    </div>
  );
}