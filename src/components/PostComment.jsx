import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";
import { useContext } from "react";

const CommentBox = ({ reviewID, newComment, setNewComment }) => {
  const { user } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    postComment(reviewID, user.username, newComment);
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
