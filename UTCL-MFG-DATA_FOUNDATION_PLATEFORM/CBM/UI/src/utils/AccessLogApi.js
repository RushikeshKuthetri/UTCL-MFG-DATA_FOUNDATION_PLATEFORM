// import React from "react";
import axios from "axios";
import { getUserIP } from "./getIp";
import { config } from "../config";

export const accessLogApi = async (payload) => {
  try {
    const userIP = await getUserIP();

    // console.log(userIP.IPv4);
    // console.log(config.BaseUrl);
    payload.ip = userIP.IPv4 ? userIP.IPv4 : "Ip not found";
    // console.log(payload?.ip);
    const response = axios.post(`${config.BaseUrl}/addLog`, payload, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("login"))?.token
        }`,
      },
    });

    if (response.code === 200) {
      return response.data;
    }

    throw Error;
  } catch (error) {
    console.log(error);
  }
};
