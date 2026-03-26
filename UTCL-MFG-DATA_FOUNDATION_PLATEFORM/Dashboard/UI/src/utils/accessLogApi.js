// import React from "react";
import axios from "axios";
import { getUserIP } from "./getUserIP";
import { BASE_URL } from "../base";

export const accessLogApi = async (payload, token) => {
  try {
    // console.log(token);
    const userIP = await getUserIP();
    payload.ip = userIP.IPv4 ? userIP.IPv4 : "Ip not found";
    const { data } = axios.post(`${BASE_URL}addLog`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.code === 200) {
      return data;
    }

    throw Error;
  } catch (error) {
    console.log(error);
  }
};
