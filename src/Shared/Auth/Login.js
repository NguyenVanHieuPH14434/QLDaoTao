import React, { memo, useState } from "react";
import "./login.scss";  
import { userService } from "../../services"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Login() {
  const [user, setUser] = useState({
    user_name: "",
    user_password: "",
    isShowPassword: false,
  });
  const onChange = (value, name) => {
    setUser({ ...user, [name]: value });
  };
  const handleLogin = async () => {
    console.log(user);
    await userService.handleLoginApi(user.user_name, user.user_password)
  };
  const handleViewPassword = () => {
    setUser({isShowPassword: !user.isShowPassword });
  }
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content">
          <div className="col-12 text-center login-text">Login</div>
          <div className="col-12 form-group login-input ">
            <label>Username</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Enter your username"
              name="user_name"
              value={user.user_name}
              onChange={(e) => {
                onChange(e.target.value, e.target.name);
              }}
            />
          </div>
          <div className="col-12 form-group login-input password">
            <label>Password</label>
            <input
              type={user.isShowPassword === true ? "text" : "password"} 
              className="form-control "
              placeholder="Enter your password"
              name="user_password"
              value={user.user_password}
              onChange={(e) => {
                onChange(e.target.value, e.target.name);
              }}
            />
            <span className="font-eye" onClick={(e) => handleViewPassword()}><FontAwesomeIcon icon={faEyeSlash} /></span>
          </div>
          <div className="col-12">
            <button className="btn-login" onClick={(e) => handleLogin()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Login);
