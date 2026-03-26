export const config = {
  // BaseUrl: "http://localhost:8080/api",
  // BaseSocketUrl: "ws://localhost:8080/api/cbm",
  // BaseUrl: "https://i4.utclconnect.com/api",
  // BaseSocketUrl: "wss://i4.utclconnect.com/api/cbm",
  // BaseUrl: "https://i4.utclconnect.com/uat",
  // BaseSocketUrl: "wss://i4.utclconnect.com/uat/cbm",
  BaseUrl: process.env.REACT_APP_BASE_URL,
  BaseSocketUrl: process.env.REACT_APP_SOCKET_URL_PROD,
};
