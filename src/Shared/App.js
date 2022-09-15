import React from "react";
import "./App.scss";
import  Login from"./Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cadres from "../Modules/Cadres/Cadres";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Cadres />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
