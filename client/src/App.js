import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Create from "./components/Posts/Create";
import { Route, Switch } from "react-router-dom";

const Home = () => <div> Home </div>;
const NotFound = () => <div> NotFound </div>;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="adjustment mt-5 pt-2" />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={Create} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
