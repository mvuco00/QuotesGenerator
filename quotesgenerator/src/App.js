import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "../src/components/Header";
import AllQuotes from "./components/AllQuotes";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div className="App">
      <Header setNumber={setNumber} />
      <Switch>
        <Route path="/allquotes" exact component={AllQuotes} />
        <Route path="/">
          <Home number={number} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
