import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-server.herokuapp.com/api",
});

export const getCategories = async () => {
  const { data } = await reviewsApi.get("/categories");
  console.log(data.categories);
  return data.categories;
};

export const getReviews = async () => {
  const { data } = await reviewsApi.get("/reviews");
  console.log(data);
  return data.reviews;
};

export const getReviewsById = async () => {
  const { data } = await reviewsApi.get(`/reviews/`);
  console.log(data);
  return data.reviews;
};
