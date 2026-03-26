import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../data/auth/Config";
import { addSessionStorage } from "../../../utils";

async function handleLogin(instance) {
  addSessionStorage("SLOG", "SLOG");
  await instance.loginRedirect(loginRequest);
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
  const { instance } = useMsal();
  return (
    <button
      className="btn btn-1 w-100 my-4 mb-2"
      onClick={() => handleLogin(instance)}
    >
      Sign in using Microsoft
    </button>
  );
};
