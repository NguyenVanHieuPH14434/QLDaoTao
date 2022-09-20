import React, { memo, useState , useEffect } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
// import { push } from "connected-react-router";
import "./login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [isShow , setIsShow] = useState(false)
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
      axios.get('http://localhost:8080/api/auth/user/list')
      .then((res) => {
        // console.log(res.data[0].password);  
      })
      .catch((err) => console.log(err));
  },[])
  const [errorMessage , setErrorMessage] = useState("")
  // console.log(user);
  const handleLogin = async () => {
    setErrorMessage("")
    try {
      if(user.username === '' && user.password === '') throw "Chưa nhập thông tin tài khoản mật khẩu"
      if(user.username === '') throw "Chưa nhập tài khoản"
      if(user.password === '') throw "Chưa nhập mật khẩu"
      await axios.post('http://localhost:8080/api/auth/login' , user)
      .then(function(res) {
        console.log(res.data.data.roles);
        
      })
      .catch(res=>console.log(res.message))
    }
    catch (err) {
      setErrorMessage(err)
      console.log('loi' , err);
    }
  }
  const handleViewPassword = () => {
    setIsShow(!isShow)
  };
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
              name="username"
              value={user.username}
              onChange={(e) => {
                onChange(e);
              }}
            />
          </div>
          <div className="col-12 form-group login-input password">
            <label>Password</label>
            <input
              type={isShow === true ? "text" : "password"}
              className="form-control "
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={(e) => {
                onChange(e);
              }}
            />
            <span className="font-eye" onClick={(e) => handleViewPassword()}>
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>
          </div>
          <div className="col-12" style={{color: 'red' , fontSize: "13px"}}>
            {errorMessage}
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

// const mapDispatchToProps = dispatch => {
//   return {
//       navigate: (path) => dispatch(push(path)),
//       adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
//       adminLoginFail: () => dispatch(actions.adminLoginFail()),
//       userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
//   };
// };

export default Login;
