import axios from "axios";
import { createContext, useCallback, useState } from "react";

export const appContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState([]);
  const [details, setDetails] = useState([]);
  const fetchHomeMeals = useCallback((search) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        console.log(response.data.meals);
        setMeals(response.data.meals);
      });
  }, []);

  const fetchCategories = useCallback(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        setCategories(response.data.categories);
        console.log(response.data.categories);
      });
  }, []);

  const fetchDetails = useCallback((id) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.log(response.data.meals);
        setDetails(response.data.meals);
      })
      .catch((error) => console.log("Hata", error));
  }, []);
  return (
    <appContext.Provider
      value={{
        fetchHomeMeals,
        meals,
        fetchCategories,
        categories,
        fetchDetails,
        details,
      }}
    >
      {children}
    </appContext.Provider>
  );
};
