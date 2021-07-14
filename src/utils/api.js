import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://nc-games-server.herokuapp.com/api",
});

export const getCategories = async () => {
  const { data } = await reviewsApi.get("/categories");
  return data.categories;
};

export const getReviews = async () => {
  const { data } = await reviewsApi.get("/reviews");
  return data.reviews;
};

export const getReviewsById = async (reviewID) => {
  const { data } = await reviewsApi.get(`/reviews/${reviewID}`);
  return data.review;
};

export const getReviewsByCat = async (category) => {
  const { data } = await reviewsApi.get(`/reviews?category=${category}`);
  console.log(data.reviews);
  return data.reviews;
};
