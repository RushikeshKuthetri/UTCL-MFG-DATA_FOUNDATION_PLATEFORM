import axios from "axios";
import { getUserIP } from "../getUserIP";
import { BASE_URL } from "../../base";

export const accesslogshistory = async (payloadData) => {
  try {
    const userIP = await getUserIP();
    const { token, email } = JSON.parse(localStorage.getItem("login"));
    let payload = {
      userId: email,
      ip: userIP.IPv4 ? userIP.IPv4 : "Ip not found",
      module: "Mimics",
      plant: payloadData?.plant ? payloadData.plant : "-",
      url: window.location.href, //url: payloadData.url,
      options: "",
      plant_or_section: payloadData?.section ? payloadData.section : "",
    };
    const { data } = await axios.post(`${BASE_URL}addLog`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // if (data?.code === 200) {
    //   return data;
    // }
  } catch (error) {
    console.log(error);
  }
};
