import axios from "axios";
import { loginStart, loginSuccess, loginFailed } from "./authSlice";
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8080/api/auth/login", user);
    dispatch(loginSuccess(res.data.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
  }
};
