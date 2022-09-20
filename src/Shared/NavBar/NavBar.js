import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  const [user, SetUser] = useState(null);
  return (
    <nav className="navbar-container">
      <Link to="/"> Home </Link>
      {user ? (
        <>
          <p className="navbar-user">
            {" "}
            hi,
            <span> {user} </span>
          </p>
          <Link to="/logout"> Logout </Link>
        </>
      ) : (
        <>
          <Link to="/login"> Login </Link>
          <Link to="/register"> Register </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
