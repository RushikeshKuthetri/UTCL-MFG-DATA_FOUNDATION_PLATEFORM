import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useToken from "../UseToken/useToken";
const ProtectedRoute = ({ children }) => {
  const { token, setToken } = useToken();
  // console.log("inProtext", token);
  if (!token?.token) {
    // console.log("inProtext 1111");
    return <Navigate to="/admin" />;
  }
  return children;
};

export default ProtectedRoute;
