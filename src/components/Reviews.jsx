import React from "react";
import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, []);

  return (
    <div className="row">
      <h1 className="header_title">Reviews</h1>
      <ul className="review_list">
        {reviews.map((review) => {
          return (
            <div className="review_card">
              <div className="column">
                <li key={review.review_id}>
                  <img
                    className="review_img"
                    src={review.review_img_url}
                    alt={review.title}
                  ></img>
                  <p>{review.title}</p>
                  <p>
                    {review.owner} || {review.created_at}
                  </p>
                  <p>Comments: 0 Likes: 0</p>
                </li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
