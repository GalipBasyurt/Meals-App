import React, { useContext, useEffect } from "react";
import "./Details.scss";
import { useParams } from "react-router-dom";
import { appContext } from "../../context/context";
const Details = () => {
  const { id } = useParams();
  const { fetchDetails, details } = useContext(appContext);

  useEffect(() => {
    fetchDetails(id);
  }, []);

  return (
    <div className="details">
      {details?.map((detail) => (
        <div className="detail" key={detail.idMeal}>
          <img className="detail-img" src={detail.strMealThumb} alt="" />
          <div className="detail-info">
            <h2 className="detail-info-name">{detail.strMeal}</h2>
            <h3 className="detail-info-country">
              Country: <small>{detail.strArea}</small>
            </h3>
            <h3 className="detail-info-category">
              Category: <small>{detail.strCategory}</small>
            </h3>
            <p className="detail-info-instruction">{detail.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
