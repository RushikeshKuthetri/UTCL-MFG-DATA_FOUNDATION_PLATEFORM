import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../base";
import { sentIPtoBackend } from "../sendIPtoBackend";

export const loginAPI = async (token) => {
  const response = await axios.post(
    `${BASE_URL}users/adLoginBasic`,
    {},
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const callADX = async (token, dispatch, adminToken, setToken) => {
  try {
    dispatch({ type: "LOADING_TRUE" });
    const adResponse = await loginAPI(token);
    dispatch({ type: "LOADING_FALSE" });
    if (adResponse === undefined) {
      dispatch({
        type: "LOGOUT",
      });
      toast.error("Login Failed Please Try Again!");
    } else {
      let modules;
      if (adResponse.data.Modules === undefined) {
        modules = [];
      }
      modules = adResponse.data.Modules.map(({ Module }) => Module);
      localStorage.setItem("modules", JSON.stringify(modules));
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: adResponse.data.token,
          plants: adResponse.data.Plants.map(({ Plant }) => Plant).sort(),
          username: adResponse.data.UserName,
          email: adResponse.data.UserID,
          modules,
        },
      });
    }
    if (
      adResponse?.data?.Role === "admin" ||
      adResponse?.data?.Role === "super_admin"
    ) {
      let userToken = {
        token: adResponse.data.token,
        UserName: adResponse.data.UserName,
        UserID: adResponse.data.UserID,
        Role: adResponse.data.Role,
      };

      if (!adminToken) {
        setToken(userToken);
      }
    }
    if (adResponse.status === 200) {
      sentIPtoBackend(true);
    } else {
      sentIPtoBackend(false);
    }
    // if (JSON.parse(getFromLocalStorage("login"))?.plants?.length === 0) {
    //   navigate("/dashboard");
    //   return;
    // } else {
    //   navigate(state?.pathname);
    // }
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: "Some issue occured!! Please try again later.",
    });
  }
};
export const requestAccessToken = async (
  loginRequest,
  accounts,
  instance,
  dispatch,
  adminToken,
  setToken
) => {
  try {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };
    const tokenResponse = await instance.acquireTokenSilent(request);
    callADX(tokenResponse.accessToken, dispatch, adminToken, setToken);
  } catch (error) {
    toast.error("Login Failed Please Try Again!!");
    dispatch({ type: "LOGOUT" });
    window.location.reload();
  }
};
