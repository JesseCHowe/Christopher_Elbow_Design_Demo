import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Cart from "./components//Cart/Cart";
import _404 from "./components/_404/_404";
import SignatureChocolateBars from "./components/SignatureChocolateBars/SignatureChcolateBars";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" component={SignatureChocolateBars}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={_404}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
