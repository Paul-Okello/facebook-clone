import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import StoryReal from "./StoryReal";

function Feed() {
  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />
    </div>
  );
}

export default Feed;
