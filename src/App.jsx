import React from "react";
import { Switch, Route, BrowserRouter, Router } from "react-router-dom";

import history from "./common/history";

import HomePage from "./components/features/HomePage/HomePage";
import Search from "./components/features/Search/Search";
// import Cities from "./components/features/Cities/Cities";
import Cuisines from "./components/features/Cuisines/Cuisines";
// import OneCard from "./components/ui/OneCard/OneCard";
import Restaurants from "./components/features/Restaurants/Restaurants";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>What2Eat</h2>
        <div className="links">
          <a href="/">Home</a>
          <a href="/cities">Cities</a>
          <a href="/search">Search</a>
          <a href="/cuisines">Cuisines</a>
        </div>

        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={Search} />
            {/* <Route path="/cities" component={Cities} /> */}
            {/* <Route path="/categories" component={Categories}/> */}
            <Route path="/cuisines" component={Cuisines} />
            <Route path="/restaurants" component={Restaurants} />
            {/* <Route path="/establishments" component={Establishments} /> */}
            {/* <Route path="/menu" component={Menu} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
