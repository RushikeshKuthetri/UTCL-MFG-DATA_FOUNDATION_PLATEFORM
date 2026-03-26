import axios from "axios";
import { BASE_URL } from "../../base";

export const getLatestData = async (plant, dispatch) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  const response = await axios.post(
    `${BASE_URL}latestData`,
    {
      userId: email,
      plants: [`${plant}`],
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  dispatch({ type: "SOCKET_DATA", payload: response.data.result });
};

export const getLatestDataNew = async (tagList, dispatch) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  const response = await axios.post(
    `${BASE_URL}latestDataNew`,
    {
      userId: email,
      tagList,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
        "Accept-Encoding": "*/*"
      },
    }
  );

  dispatch({ type: "SOCKET_DATA", payload: response.data.result });
};
