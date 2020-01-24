import React from "react";
import PropTypes from "prop-types";

import "./Restaurant";

const Restaurant = ({
  name,
  location,
  timings,
  averageCost,
  rating,
  menuUrl
}) => {
  return (
    <div>
      {console.log(
        "props in ONE restaurant",
        name,
        location,
        timings,
        averageCost,
        rating,
        menuUrl
      )}
      <p>{name}</p>
      <p>{location}</p>
      <p>{timings}</p>
      <p>{averageCost}</p>
      <p>{rating.score}</p>
      <p>{menuUrl}</p>
    </div>
  );
};

Restaurant.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  timings: PropTypes.string,
  averageCost: PropTypes.number,
  rating: PropTypes.number,
  menuUrl: PropTypes.string
};

export default Restaurant;
