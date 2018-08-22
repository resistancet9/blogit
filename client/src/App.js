import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route } from "react-router-dom";

const Home = () => <div> Home </div>;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="adjustment mt-5 pt-2" />
        <div className="container">
          <Route path="/" exact component={Home} />
        </div>
      </div>
    );
  }
}

export default App;
