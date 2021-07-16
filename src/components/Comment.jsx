import useCommentVote from "../hooks/useCommentVote";

const Comment = ({ comment }) => {
  const { commentVotes, incCommentVotes, decCommentVotes } = useCommentVote(0);

  return (
    <div className="comment_card">
      <li key={comment.comment_id}>
        <p>{comment.body}</p>
        <p>
          Posted by {comment.author} at {comment.created_at}
        </p>
        <p>Likes: {comment.votes + commentVotes}</p>
        <button onClick={() => incCommentVotes(comment.comment_id)}>
          Like
        </button>
        <button onClick={() => decCommentVotes(comment.comment_id)}>
          Dislike
        </button>
        <p>
          {comment.owner} || {comment.created_at}
        </p>
      </li>
    </div>
  );
};

export default Comment;
