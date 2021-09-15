import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import User from "./components/User";
import taxConfig from "./configData.js";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Switch>
        {/* <Route path="/">
          <User category="man" data={taxConfig.male} />
        </Route> */}
        <Route path="/man">
          <User category="man" data={taxConfig.male} />
        </Route>
        <Route path="/woman">
          <User category="woman" data={taxConfig.others} />
        </Route>
        <Route path="/disabled">
          <User category="disabled" data={taxConfig.others} />
        </Route>
        <Route path="/oldage">
          <User category="oldage" data={taxConfig.others} />
        </Route>
        <Redirect to="/man" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
