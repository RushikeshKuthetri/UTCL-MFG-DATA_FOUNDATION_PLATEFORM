import axios from "axios";
import { BASE_URL } from "../../base";

export const fetchLiveDataAvailable = async (plantCode, dispatch) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  try {
    const response = await axios.post(
      `${BASE_URL}dataComing`,
      {
        userId: email,
        plant: plantCode,
        interval: "10m",
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error(error.response.data?.message);
    dispatch({
      type: "LIVE_STATUS_ERROR",
      payload: error.response.data?.message,
    });
    return null;
  }
};

export const fetchLiveDataAvailableNew = async (
  plantCode,
  dispatch,
  tagsData
) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  try {
    const response = await axios.post(
      `${BASE_URL}dataComingNew`,
      {
        userId: email,
        plant: tagsData,
        interval: "10m",
        plantCode: plantCode,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error(error.response.data?.message);
    dispatch({
      type: "LIVE_STATUS_ERROR",
      payload: error.response.data?.message,
    });
    return null;
  }
};
