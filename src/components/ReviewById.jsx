import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById, getComments } from "../utils/api";
import CommentToggle from "./CommentToggle";
import CommentBox from "./PostComment";
import useVote from "../hooks/useVote";
import Comment from "./Comment";
import { user } from "../../../../backend/be-nc-games/node_modules/pg/lib/defaults";

const ReviewById = () => {
  const [review, setReview] = useState([]);
  const { reviewID } = useParams();
  const [comments, setComments] = useState([]);
  const { votes, incVotes, decVotes } = useVote(0);
  const [newComment, setNewComment] = useState([]);

  useEffect(() => {
    getReviewsById(reviewID).then((reviewsFromApi) => {
      setReview(reviewsFromApi);
    });
  }, [reviewID]);

  useEffect(() => {
    getComments(reviewID).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [reviewID]);

  console.log({ user });

  return (
    <div className="big_box">
      <h1 className="header_title">Reviews</h1>
      <ul className="review_list">
        <div>
          <div className="column">
            <li key={review.review_id} className="review_by_id_card">
              <img
                className="review_by_id_img"
                src={review.review_img_url}
                alt={review.title}
              ></img>
              <p>{review.title}</p>
              <p>Category: {review.category}</p>
              <p>
                {review.owner} || {review.created_at}
              </p>
              <p>Game designed by: {review.designer}</p>
              <p>{review.review_body}</p>
              <label>Votes: {review.votes + votes}</label>
              <button onClick={incVotes}>Like</button>
              <button onClick={decVotes}>Dislike</button>
              <CommentBox
                reviewID={review.review_id}
                newComment={newComment}
                setNewComment={setNewComment}
              />
              <CommentToggle>
                <ul className="comment_list">
                  {comments.map((comment) => {
                    return <Comment comment={comment} />;
                  })}
                </ul>
              </CommentToggle>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ReviewById;
