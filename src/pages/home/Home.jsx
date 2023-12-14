import React, { useCallback, useContext, useState } from "react";
import "./Home.scss";
import { appContext } from "../../context/context";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const { fetchHomeMeals, meals } = useContext(appContext);

  const searchMeals = useCallback(() => {
    fetchHomeMeals(search);
  }, [search, fetchHomeMeals]);
  return (
    <div className="home">
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Meals..."
        />
        <button onClick={() => searchMeals()}>Search</button>
      </div>
      <div className="meals">
        {meals ? (
          meals?.map((meal) => (
            <div key={meal.idMeal} className="meal">
              <img className="meal-img" src={meal.strMealThumb} alt="#" />
              <div className="meal-info">
                <h3 className="meal-name">{meal.strMeal}</h3>
                <h4 className="meal-category">Category: {meal.strCategory}</h4>
                <h4 className="meal-country">Country: {meal.strArea}</h4>
                <Link to={`details/${meal.idMeal}`}>
                  <button className="detail-btn">Click for Details</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h1 className="empty">Not Found Meals, Try Another Meals</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
