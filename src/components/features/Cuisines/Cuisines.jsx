import React from "react";
import ZomatoService from "../../../services/ZomatoService";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import Typography from "@material-ui/core/Typography";
// import { Card } from "semantic-ui-react";

// import CardList from "../../ui/CardList/CardList";
import ContentCard from "../../ui/Card/Card";

import history from "../../../common/history";

import "./Cuisines.css";

export default class Cuisines extends React.Component {
  state = {
    cuisines: []
    // restaurants: []
  };

  async renderCuisines() {
    const cuisines = await ZomatoService.getCuisines(280);
    this.setState({ cuisines });
  }

  handleSearchByCuisine = async cuisinesId => {
    console.log("cuisine id in handle search", cuisinesId);
    const results = await ZomatoService.search(cuisinesId);
    console.log("results from search by C id", results);
    // this.setState({ restaurants: results });
    history.push({
      pathname: "/restaurants",
      state: { restaurants: results }
    });
  };

  render() {
    if (!this.state.cuisines.length) this.renderCuisines();

    const cuisine = this.state.cuisines.map((c, index) => (
      <ContentCard
        key={index}
        cuisineId={c.cuisine.cuisine_id}
        name={c.cuisine.cuisine_name}
        handleSearch={this.handleSearchByCuisine}
      />
    ));

    return (
      <div className="cuisinesContainer">
        <h3>Cuisines Page</h3>
        {cuisine || ""}
      </div>
    );
  }
}
