import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";

const ReviewById = () => {
  const [reviews, setReviews] = useState([]);
  const { reviewID } = useParams();
  console.log(reviewID);

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
          if (review.review_id === reviewID) {
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
          } else {
            return <p> invalid ID! </p>;
          }
        })}
      </ul>
    </div>
  );
};

export default ReviewById;
