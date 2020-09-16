import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../src/Pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MyNavbar from "./Components/Navbar/Navbar";
import Mia from "./Pages/Mia";


function App() {
  return (
    <>
      {/* <MyNavbar /> */}
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/mia" component={Mia} />
      </Router>
    </>
  );
}

export default App;
