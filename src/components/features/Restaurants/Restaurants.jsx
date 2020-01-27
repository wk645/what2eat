import React from "react";
import PropTypes from "prop-types";

import Restaurant from "../Restaurant/Restaurant";

import "./Restaurants";

export default class Restaurants extends React.Component {
  render() {
    return (
      <div>
        <p>Restaurants</p>
        {this.props.location.state.restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            name={restaurant.name}
            location={restaurant.location.address}
            timings={restaurant.timings}
            averageCost={restaurant.averageCost}
            rating={restaurant.rating}
            menuUrl={restaurant.menuUrl}
          />
        ))}
      </div>
    );
  }
}

Restaurants.propTypes = {
  location: PropTypes.object
};
