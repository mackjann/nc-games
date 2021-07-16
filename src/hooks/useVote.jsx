import { useEffect, useState } from "react";
import { patchVotes } from "../utils/api";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const useVote = (actualVote = 0) => {
  const [votes, setVotes] = useState(actualVote);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const { reviewID } = useParams();

  const incVotes = () => {
    if (upvoted === false) {
      setVotes((currentVotes) => currentVotes + 1);
      setUpvoted(true);
      axios.patch(
        `https://nc-games-server.herokuapp.com/api/reviews/${reviewID}`,
        {
          inc_votes: 1,
        }
      );
    }
  };

  const decVotes = () => {
    if (downvoted === false) {
      setVotes((currentVotes) => currentVotes - 1);
      setDownvoted(true);
      axios.patch(
        `https://nc-games-server.herokuapp.com/api/reviews/${reviewID}`,
        {
          inc_votes: -1,
        }
      );
    }
  };

  return { votes, incVotes, decVotes };
};

export default useVote;
