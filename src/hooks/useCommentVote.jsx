import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const useCommentVote = (actualVote = 0) => {
  const [commentVotes, setCommentVotes] = useState(actualVote);

  const incCommentVotes = (comment_id) => {
    if (commentVotes === 0 || commentVotes === -1) {
      setCommentVotes((currentCommentVotes) => currentCommentVotes + 1);
      axios.patch(
        `https://nc-games-server.herokuapp.com/api/comments/${comment_id}`,
        {
          inc_votes: 1,
        }
      );
    }
  };

  const decCommentVotes = (comment_id) => {
    if (commentVotes === 0 || commentVotes === 1) {
      setCommentVotes((currentCommentVotes) => currentCommentVotes - 1);
      axios.patch(
        `https://nc-games-server.herokuapp.com/api/comments/${comment_id}`,
        {
          inc_votes: -1,
        }
      );
    }
  };

  return { commentVotes, incCommentVotes, decCommentVotes };
};

export default useCommentVote;
