import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Confections from "./containers/Confections";
import Product from "./containers/Product";
import ChocolateBars from "./containers/ChocolateBars";
import _404 from "./containers/_404";
import Cart from "./containers/Cart";
import Home from "./containers/Home";
import Bonbons from "./containers/Bonbons";
const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path="/chocolate-bars" component={ChocolateBars}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/bonbons" component={Bonbons}></Route>
        <Route path="/product/:id" component={Product}></Route>
        <Route path="/artisan-confections" component={Confections}></Route>
        <Route path="/" component={Home}></Route>

        <Route component={_404}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
