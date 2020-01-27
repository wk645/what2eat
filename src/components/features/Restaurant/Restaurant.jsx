import React from "react";
import PropTypes from "prop-types";

import "./Restaurant.css";

const Restaurant = ({
  name,
  location,
  timings,
  averageCost,
  rating,
  menuUrl
}) => {
  return (
    <div className="mainCardsDiv">
      <div className="restaurantCard">
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Location:</b> {location}
        </p>
        <p>
          <b>Hours:</b> {timings}
        </p>
        <p>
          <b>Cost:</b> {averageCost}
        </p>
        <p>
          <b>Rating:</b> {rating.score}
        </p>
        <p>
          <b>Menu:</b> {menuUrl}
        </p>
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  timings: PropTypes.string,
  averageCost: PropTypes.number,
  rating: PropTypes.object,
  menuUrl: PropTypes.string
};

export default Restaurant;
