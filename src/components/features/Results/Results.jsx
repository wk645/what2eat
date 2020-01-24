import React from 'react';
import ZomatoService from '../../../services/ZomatoService';
import CuisinesCodes from '../../../common/CuisinesCodes';

class Results extends React.Component {
  state = {
    results: []
  };

  async getResults() {
    const cuisinesCode = CuisinesCodes[this.props.value];
    console.log('portal ccc', cuisinesCode);
    const restaurants = await ZomatoService.search(cuisinesCode);
    console.log("restaurants", restaurants);
    // this.setState({ results: restaurants });
  };

  render() {
    console.log("props in results", this.props.value);
    console.log("results", this.state.results);

    if (this.props.value) this.getResults();

    return <div>{this.props.value}</div>;
  }
}

export default Results;
