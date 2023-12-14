import React, { useContext, useEffect } from "react";
import "./Categories.scss";
import { appContext } from "../../context/context";

const Categories = () => {
  const { fetchCategories, categories } = useContext(appContext);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return (
    <div className="categories">
      {categories?.map((category, index) => (
        <div key={index} className="category">
          <img
            className="category-img"
            src={category.strCategoryThumb}
            alt="#"
          />
          <h3 className="category-name">{category.strCategory}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
