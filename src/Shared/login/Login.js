// import { createContext, useContext, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocalStorage } from "./useLocalStorage";
// // import { useLocalStorage } from "./useLocalStorage";
// function Login() {
//   const [user, setUser] = useLocalStorage("user", null);
//   const navigate = useNavigate();
//   // call this function when you want to authenticate the user
//   const login = async (data) => {
//     setUser(data);
//     navigate("/profile");
//   };
//   // call this function to sign out logged in user
//   const logout = () => {
//     setUser(null);
//     navigate("/", { replace: true });
//   };
//   const value = useMemo(
//     () => ({
//       user,
//       login,
//       logout,
//     }),
//     [user]
//   );
//   return <div></div>;
// }

// export default Login;
