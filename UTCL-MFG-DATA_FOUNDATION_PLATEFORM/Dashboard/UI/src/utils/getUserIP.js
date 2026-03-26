import axios from "axios";

export const getUserIP = async () => {
  try {
    const response = await axios.get("https://api.ipify.org/?format=json");

    return { IPv4: response.data.ip };
  } catch (err) {
    return err;
  }
};
