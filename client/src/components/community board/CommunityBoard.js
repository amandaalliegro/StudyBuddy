import React from "react";
import Post from "./Post.js"
export default function CommunityBoard(props) {
 
  return (
    <div id="chat_box">
        <title>chat</title>
  <ul id="Posts"></ul>
        <form action>
          <input id="new_post" autoComplete="off" /> <button>Post</button>
        </form>
      </div>
  );
};