import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../src/Pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShortForm from "./Pages/ShortForm/ShortForm";
import LongForm from "./Pages/LongForm/LongForm";
import MyNavbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <MyNavbar />
    <Router>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/short-form" component={ShortForm} />
      <Route exact path="/long-form" component={LongForm} /> */}
    </Router>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
