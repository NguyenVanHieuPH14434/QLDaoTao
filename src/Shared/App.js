import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.scss';
// import Login from "./Login/Login"
import Login from "./Auth/Login"
import Cadres from "../Modules/Cadres/Cadres";
import { path } from "../ulits/constant"
// import Admin from "./Admin/Admin";
function App() {
  return (
    <Router>
    <div className="App">
      {/* <AppHeader /> */}
      <Routes>
        {/* <Route path="/" element={<Cadres />} /> */}
        <Route path={path.LOGIN} element={<Login />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
