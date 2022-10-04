import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
  return (
    <article>
      <h2>{post.postTitle}</h2>
      <p className="excerpt">{post.postSubtitle.substring(0, 75)}...</p>{" "}
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.postAuthor} />
        <TimeAgo timestamp={post.updatedAt} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
