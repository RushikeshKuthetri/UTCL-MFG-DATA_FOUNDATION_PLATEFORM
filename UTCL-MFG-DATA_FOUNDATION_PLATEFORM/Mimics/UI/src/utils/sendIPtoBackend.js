import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../base";
import { getUserIP } from "./getUserIP";

export const sentIPtoBackend = async (loginStatus, dispatch) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  const userIP = await getUserIP();
  // console.log("userIP", userIP)
  if (userIP?.IPv4) {
    dispatch({
      type: "USER_IP",
      payload: {
        userIp: userIP.IPv4,
      },
    });
  } else {
    dispatch({
      type: "USER_IP",
      payload: {
        userIp: "98.207.254.136",
      },
    });
  }
  await axios.post(
    `${BASE_URL}logAccessIPNew`,
    {
      userId: email,
      ip: userIP?.IPv4 ? userIP.IPv4 : "98.207.254.136",
      loginTime: moment().utcOffset(330).format("YYYY-MM-DD HH:mm:ss.SSS"),
      loginStatus,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};
