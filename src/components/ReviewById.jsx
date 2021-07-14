import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "../utils/api";

const ReviewById = () => {
  const [review, setReview] = useState([]);
  const { reviewID } = useParams();

  useEffect(() => {
    getReviewsById(reviewID).then((reviewsFromApi) => {
      setReview(reviewsFromApi);
    });
  }, [reviewID]);

  return (
    <div className="row">
      <h1 className="header_title">Reviews</h1>
      <ul className="review_list">
        <div className="review_card">
          <div className="column">
            <li key={review.review_id}>
              <img
                className="review_img"
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
              <label>Votes: {review.votes}</label>
              <button>Upvote</button>
              <p>Comments: {review.comment_count}</p>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ReviewById;
