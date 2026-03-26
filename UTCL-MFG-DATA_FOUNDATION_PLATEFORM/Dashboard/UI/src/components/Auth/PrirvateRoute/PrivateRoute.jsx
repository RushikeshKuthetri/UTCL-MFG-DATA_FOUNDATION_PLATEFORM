import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
export const PrivateRoute = ({ component: Component, path }) => {
  const isAuth = useIsAuthenticated();
  const { authProvider } = useSelector((state) => state);
  return authProvider.isLogin || isAuth ? (
    <Component />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
