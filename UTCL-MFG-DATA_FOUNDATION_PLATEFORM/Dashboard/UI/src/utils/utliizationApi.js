import { BASE_URL } from "../base";
import axios from "axios";
// import { toast } from "react-toastify";
export const getDailyUserData = async (payload, token) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}adminSuper/utilization`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (data.status === "success") {
      return data.data;
    }
    throw Error;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const monthlyUserData = async (payload, token) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}adminSuper/utilizationMonthly`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (data.status === "success") {
      return data.data;
    }
    throw Error;
  } catch (error) {
    console.log(error)
    return [];
  }
};
export const getdropDownFilter = async (payload, token) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}admin/plantDetails`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (data.status === "success") {
      return data.data;
    }
    throw Error;
  } catch (error) {
    console.log(error);
  }
  // const data = [
  //     // { value: 0, label: "Select Option", isDisabled: true },
  //     { value: "ACW", label: "ACW" },
  //     { value: "DHCW", label: "DHCW" },
  //     { value: "HCW", label: "HCW" },
  //     { value: "AECW", label: "AECW" },
  //   ];
  // return data;
};
