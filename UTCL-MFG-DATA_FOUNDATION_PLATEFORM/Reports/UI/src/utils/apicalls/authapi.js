import axios from "axios";
import { BASE_URL, FETCH_TAG_MASTER_HANDLER_URL } from "../../base";
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

export const getSectionTagsAPI = async (token, plants, userId) => {
  const response = await axios.post(
    `${BASE_URL}sectionTagDetails`,
    {
      userId,
      plants,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response;
};

export const callADX = async (token, dispatch, navigate, state) => {
  try {
    dispatch({ type: "LOADING_TRUE" });
    const adResponse = await loginAPI(token);
    dispatch({ type: "LOADING_FALSE" });
    if (adResponse === undefined) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: "Not Authorised",
          plants: [],
          username: "",
          email: "",
          section: "",
          tagnames: "",
        },
      });
    } else {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: adResponse.data.token,
          plants: adResponse.data.Plants.map(({ Plant }) => Plant).sort(),
          username: adResponse.data.UserName,
          email: adResponse.data.UserID,
        },
      });
      const sectionTagDetails = await getSectionDetailsAPI(
        adResponse.data.token,
        adResponse.data.Plants.map(({ Plant }) => Plant),
        adResponse.data.UserID,
        dispatch
      );
      dispatch({
        type: "LOGIN_SECTION_TAGS_DETAILS",
        payload: {
          lines: sectionTagDetails.data.data.Lines,
          section: sectionTagDetails.data.data.Sections,
          // tagnames: sectionTagDetails.data.data["Tag Names"],
        },
      });
    }
    if (adResponse.code === 200) {
      sentIPtoBackend(true, dispatch);
    } else {
      sentIPtoBackend(false, dispatch);
    }
  } catch (error) {
    console.log("error", error);
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
  navigate,
  state
) => {
  try {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };
    const tokenResponse = await instance.acquireTokenSilent(request);
    callADX(tokenResponse.accessToken, dispatch, navigate, state);
  } catch (error) {
    console.error(error);
  }
};

export const getSectionDetailsAPI = async (token, plants, userId, dispatch) => {
  dispatch({ type: "LOADING_TRUE" });
  const response = await axios.post(
    `${BASE_URL}lineSectionDetails`,
    {
      userId,
      plants,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
        // "Accept-Encoding": "*/*",
      },
    }
  );
  dispatch({ type: "LOADING_FALSE" });
  return response;
};

export const getSectionTagDetailsAPI = async (plants, dispatch) => {
  try {
    const { token, email } = JSON.parse(localStorage.getItem("login"));
    const response = await axios.post(
      `${BASE_URL}sectionTagDetailsNew`,
      {
        userId: email,
        plants,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
          // "Accept-Encoding": "*/*",
        },
      }
    );

    dispatch({
      type: "SECTION_TAGS_DETAILS",
      payload: {
        tagNames: response.data.data["Tag Names"],
      },
    });
    return response.data.data;
  } catch (error) {
    console.log({ error });
  }
};

export const getSectionTagDetailsAPIx = async (plants, dispatch) => {
  dispatch({type: "START_LOADER"});
  try {
    const { token, email } = JSON.parse(localStorage.getItem("login"));
    const response = await axios.post(
      `${BASE_URL}sectionTagDetailsNew`,
      {
        userId: email,
        plants,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
          // "Accept-Encoding": "*/*",
        },
      }
    );

    // const response = await axios.post(
    //   FETCH_TAG_MASTER_HANDLER_URL,
    //   {plants},
    //   {
    //     responseType: 'json', // Assume API returns JSON
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // console.log({response, data: response?.data});
    

    // dispatch({
    //   type: "SECTION_TAGS_DETAILS",
    //   payload: {
    //     tagNames: response.data.data["Tag Names"],
    //   },
    // });
    dispatch({type: "STOP_LOADER"});
    return response.data.data[`Tag Names`];
  } catch (error) {
    console.log({ error });
    dispatch({type: "STOP_LOADER"});
  }
};
