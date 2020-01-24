import React from "react";
// import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";

import history from "../../../common/history";

import OneCard from "../OneCard/OneCard";

import { Card, Button } from "semantic-ui-react";

export default class ContentCard extends React.Component {
  state = {
    selectedCuisineId: null,
    isCardClicked: false
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({ isCardClicked: !this.state.isCardClicked });
    // let path = "/restaurants";
    this.props.handleSearch(this.props.cuisineId);
    // history.push({
    //   pathname: path,
    //   // search: "?query=abc",
    //   state: { cuisineId: this.props.cuisineId }
    // });
  };

  render() {
    // console.log("props in card", this.props.cuisineId);
    return (
      <div className="cardDiv-grid">
        <Card className="cardDiv">
          <p className="single-item">{this.props.name}</p>
          <Button className="viewButton" onClick={this.handleClick}>
            View
          </Button>
        </Card>
      </div>
    );
  }
}

ContentCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  handleSearch: PropTypes.func,
  cuisineId: PropTypes.number
};

ContentCard.defaultProps = {
  children: null
};

// export default ContentCard;
