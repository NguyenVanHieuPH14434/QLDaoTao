import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
// import Login from "./Login/Login"
import Login from "./Auth/Login";
import Cadres from "../Modules/Cadres/Cadres";
import { path } from "../ulits/constant";
import Navbar from "./NavBar/NavBar";
import Collaborator from "../Modules/Collaborator/Collaborator";
function App() {

  const user = JSON.parse(localStorage.getItem("user"));
  const roles = user ? user.roles.toString() : "";

  console.log(user);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ user ? <Cadres /> : <Login/>} />
          <Route path="/collaborator" element={ roles === "QTV" ? <Collaborator />: <Cadres />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
