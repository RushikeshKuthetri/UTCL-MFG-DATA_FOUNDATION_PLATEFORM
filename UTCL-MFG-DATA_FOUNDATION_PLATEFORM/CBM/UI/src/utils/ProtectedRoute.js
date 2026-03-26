import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  // console.log("inPRRRRRRRRRRRR", !!!activeAccount);
  // setTimeout(() => {
  if (!!!activeAccount) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
  // }, 100);
};

export default ProtectedRoute;
