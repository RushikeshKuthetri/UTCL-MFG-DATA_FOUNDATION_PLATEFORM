import React from "react";
import { useMsal } from "@azure/msal-react";

import { useDispatch } from "react-redux";

export const SignOutButton = () => {
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
        handleLogout(instance);
      }}
    >
      Sign out
    </button>
  );
};
