import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReal from "./StoryReal";

function Feed() {
  const [post, setPost] = useState();
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />
      <Post
        profilePic="https://i.pinimg.com/564x/69/99/e3/6999e3e371c74481bc4d47252ce77ef0.jpg"
        message="Wow this works"
        timestamp="This is a timestamp"
        username="Rihanna Pale"
        image="https://c4.wallpaperflare.com/wallpaper/81/477/97/rihana-singer-wallpaper-preview.jpg"
      />
      <Post
        profilePic="https://images.hivisasa.com/1200/KCjH0Et5AXOctopizzo.jpg"
        message="Wow this works"
        timestamp="This is a timestamp"
        username="Namba Nane"
        image=""
      />
    </div>
  );
}

export default Feed;
