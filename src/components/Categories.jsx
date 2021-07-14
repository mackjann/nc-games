import React from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div className="big_box">
      <h1 className="cat_title">Categories</h1>
      <ul className="cat_list">
        {categories.map((category) => {
          return (
            <li key={category.slug} className="cat_card">
              <Link to={`/categories/${category.slug}`}>
                {/*could do something here like img="{slug}.png?"*/}
                <h2 className="cat-card-title">{category.slug}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
