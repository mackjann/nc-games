import axios from "axios";

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

export const getReviewsById = async (reviewID) => {
  const { data } = await reviewsApi.get(`/reviews/${reviewID}`);
  console.log(data.review);
  return data.review;
};
