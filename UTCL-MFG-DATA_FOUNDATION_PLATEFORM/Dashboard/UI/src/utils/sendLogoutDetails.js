import axios from "axios";
import { BASE_URL } from "../base";
import { getUserIP } from "./getUserIP";

export const sendLogoutDetails = async (email, token) => {
  try {
    const userIP = await getUserIP();
    const response = await axios.post(
      `${BASE_URL}/logAccessLogout`,
      {
        userId: email,
        ip: userIP.IPv4,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log({ response });
  } catch (err) {
    return err;
  }
};
