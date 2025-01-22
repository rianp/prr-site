import React from 'react';
import './Post.css';  // for your post styles

const Post = ({ imageUrl, caption }) => {
  return (
    <div className="post">
      <img src={imageUrl} alt="Post" className="post-image" />
      <div className="post-caption">{caption}</div>
    </div>
  );
};

export default Post;
