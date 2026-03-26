import { REDIRECT_URI } from "../../base";

export const config = {
  auth: {
    clientId: "d99c09ff-0cf2-44fc-a605-6a769e0c0d6f",

    authority:
      "https://login.microsoftonline.com/f87a5f5e-f97e-4aec-bab8-6e4187ef4f1c",
    // redirectUri: "https://utcmfgiiotlinxui001-testing.azurewebsites.net",

    // redirectUri: "http://localhost:3000",
    // redirectUri: "https://i4.utclconnect.com/",
    redirectUri: REDIRECT_URI,

    scopes: ["user.read"],
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me",
};
