import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByCat } from "../utils/api";
import { Link } from "react-router-dom";

const ReviewByCat = () => {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    getReviewsByCat(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category]);

  return (
    <div className="big_box">
      <h1 className="header_title">Reviews</h1>
      <ul className="review_list">
        {reviews.map((review) => {
          return (
            <div className="review_card">
              <Link to={`/reviews/${review.review_id}`}>
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
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewByCat;
