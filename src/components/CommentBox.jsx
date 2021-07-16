import { UserContext } from "../contexts/User";
import { postComment, getComments } from "../utils/api";
import { useContext, useEffect, useState } from "react";

const CommentBox = ({ reviewID, newComment, setNewComment }) => {
  const { user } = useContext(UserContext);
  const [newCommentSubmitted, setNewCommentSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    postComment(reviewID, user.username, newComment);
    setNewCommentSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Add a comment:</label>
      <textarea
        value={newComment}
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      ></textarea>
      <button>Submit</button>
    </form>
  );
};

export default CommentBox;
