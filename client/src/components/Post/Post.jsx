import React from "react";
import "./Post.scss";
import { Link} from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((category) => (
            <span className="postCat">{category.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <div className="postTitle">{post.title}</div>
        </Link>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
