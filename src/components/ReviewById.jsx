import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "../utils/api";
import Expandable from "./Expandable";
import { getComments } from "../utils/api";

const ReviewById = () => {
  const [review, setReview] = useState([]);
  const { reviewID } = useParams();
  const [comments, setComments] = useState([]);

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
              <label>Votes: {review.votes}</label>
              <button>Upvote</button>
              <Expandable>
                <ul className="comment_list">
                  {comments.map((comment) => {
                    return (
                      <div className="comment_card">
                        <li key={comment.comment_id}>
                          <p>{comment.body}</p>
                          <p>
                            Posted by {comment.author} at {comment.created_at}
                          </p>
                          <p>Likes: {comment.votes}</p>
                          <p>
                            {comment.owner} || {comment.created_at}{" "}
                          </p>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </Expandable>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ReviewById;
