/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
  auth: {
    clientId: "d99c09ff-0cf2-44fc-a605-6a769e0c0d6f", // This is the ONLY mandatory field that you need to supply.
    authority:
      "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c", // Defaults to "https://login.microsoftonline.com/common"
    redirectUri: process.env.REACT_APP_REDIRECT_URL_PROD,
      // redirectUri: "http://localhost:7000/cbm",
    // redirectUri: "https://i4.utclconnect.com/",
    // redirectUri: "https://utcmfgiiotlinxui001-testing.azurewebsites.net/",
    // Points to window.location.origin. You must register this URI on Azure Portal/App Registration.
    // postLogoutRedirectUri: "http://localhost:3000", // Indicates the page to navigate after logout.
    // clientCapabilities: ["CP1"], // this lets the resource owner know that this client is capable of handling claims challenge.
  },
  cache: {
    cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    /**
     * Below you can configure MSAL.js logs. For more information, visit:
     * https://docs.microsoft.com/azure/active-directory/develop/msal-logging-js
     */
    // loggerOptions: {
    //   loggerCallback: (level, message, containsPii) => {
    //     if (containsPii) {
    //       return;
    //     }
    //     switch (level) {
    //       case LogLevel.Error:
    //         // console.error(message);
    //         console.log(message);
    //         return;
    //       case LogLevel.Info:
    //         // console.info(message);
    //         console.log(message);
    //         return;
    //       case LogLevel.Verbose:
    //         // console.debug(message);
    //         console.log(message);
    //         return;
    //       case LogLevel.Warning:
    //         // console.warn(message);
    //         console.log(message);
    //         return;
    //     }
    //   },
    // },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: ["User.Read"],
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
  graphMe: {
    endpoint: "https://graph.microsoft.com/v1.0/me",
    scopes: ["User.Read"],
  },
  //   graphContacts: {
  //     endpoint: "https://graph.microsoft.com/v1.0/me/contacts",
  //     scopes: ["Contacts.Read"],
  //   },
};
