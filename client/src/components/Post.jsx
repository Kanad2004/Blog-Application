import React from "react";
import "./Post.css";
const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/11/IMG_9861.jpg?resize=1280,960"
          alt=""
        />
      </div>

      <div className="text">
        <h2>Humane’s Ai Pin up close</h2>
        <p className="info">
          <a className="author">Dawid Paszko</a>
          <time>2023-01-06</time>
        </p>
        <p className="summary">
          We spent 90 minutes with the pin and its founders at Humane’s SF
          offices
        </p>
      </div>
    </div>
  );
};

export default Post;
