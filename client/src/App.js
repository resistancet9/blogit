import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Create from "./components/Posts/Create";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import { Route, Switch } from "react-router-dom";

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
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
