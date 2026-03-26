import axios from "axios";
import moment from "moment";
import { BASE_URL } from "../base";
import { getUserIP } from "./getUserIP";

export const sentIPtoBackend = async (loginStatus) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  try {
    const userIP = await getUserIP();
    await axios.post(
      `${BASE_URL}/logAccessIPNew`,
      {
        userId: email,
        ip: userIP.IPv4,
        loginTime: moment().utcOffset(330).format("YYYY-MM-DD HH:mm:ss.SSS"),
        loginStatus,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    console.debug(err);
  }
};
