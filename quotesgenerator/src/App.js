import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "../src/components/Header";

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div className="App">
      <Header setNumber={setNumber} />
      <Home number={number} />
    </div>
  );
}

export default App;
