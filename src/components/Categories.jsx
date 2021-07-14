import React from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div className="big_box">
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              {/*could do something here like img="{slug}.png?"*/}
              <h2>{category.slug}</h2>
              <p>{category.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
