import React from "react";
import { useMsal } from "@azure/msal-react";

import { useDispatch } from "react-redux";
import { sendLogoutDetails } from "../../../utils/sendLogoutDetails";
import { useSelector } from "react-redux";

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  const { authProvider } = useSelector((state) => state);
  const { instance } = useMsal();
  const dispatch = useDispatch();

  const handleLogout = (instance) => {
    instance.logoutRedirect().catch((e) => {
      console.error(e);
    });
    dispatch({ type: "LOGOUT" });
    dispatch({ type: "ERROR_FALSE" });
  };
  return (
    <button
      className="btn btn-1 w-100 my-4 mb-2"
      onClick={() => {
        sendLogoutDetails(authProvider.email, token);
        handleLogout(instance);
      }}
    >
      Sign out
    </button>
  );
};
