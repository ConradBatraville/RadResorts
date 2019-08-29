import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/single-room" component={SingleRoom} />
    </>
  );
}

export default App;
