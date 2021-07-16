import { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const useVote = (actualVote = 0) => {
  const [votes, setVotes] = useState(actualVote);

  const { reviewID } = useParams();

  const incVotes = () => {
    if (votes === 0 || votes === -1) {
      setVotes((currentVotes) => currentVotes + 1);
      axios.patch(
        `https://nc-games-server.herokuapp.com/api/reviews/${reviewID}`,
        {
          inc_votes: 1,
        }
      );
    }
  };

  const decVotes = () => {
    if (votes === 0 || votes === 1) {
      setVotes((currentVotes) => currentVotes - 1);
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
