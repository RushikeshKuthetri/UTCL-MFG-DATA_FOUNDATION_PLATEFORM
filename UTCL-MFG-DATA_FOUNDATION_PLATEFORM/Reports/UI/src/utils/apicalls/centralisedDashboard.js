import axios from "axios";
import { BASE_URL } from "../../base";

export const getCentralisedTableData = async () => {
  const { token } = JSON.parse(localStorage.getItem("login"));
  try {
    const response = await axios.post(
      `${BASE_URL}fetchCentralDataCluster`,
      {},
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response?.data?.data;
  } catch (error) {
    console.error(error);
  }
};

export const getLatestDataForCentralisedDashboardTable = async () => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  try {
    const response = await axios.post(
      `${BASE_URL}fetchCentralLatestData`,
      { userId: email },
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
export const getKilnShutDownStatus = async () => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  try {
    const response = await axios.post(
      `${BASE_URL}kilnShutdownDurationTracker`,
      { userId: email },
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response?.data?.result;
  } catch (error) {
    console.error(error);
  }
};

export const getCMShutDownStatus = async () => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  try {
    const response = await axios.post(
      `${BASE_URL}cementShutdownDurationTracker`,
      { userId: email },
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response?.data?.result;
  } catch (error) {
    console.error(error);
  }
};

export const getHoTagDetails = async (payload) => {
  const { token } = JSON.parse(localStorage.getItem("login"));
  try {
    const response = await axios.post(
      `${BASE_URL}fetchHoTagDetail`,
      { ...payload },
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    return response?.data?.result;
  } catch (error) {
    console.error(error);
  }
};
