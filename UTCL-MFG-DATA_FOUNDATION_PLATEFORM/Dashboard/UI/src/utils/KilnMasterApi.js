import axios from "axios";
import { BASE_URL } from "../base";

export const KilnMasterApi = async (payload, token) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}opt/kilnAdmin/getDropDownFilter`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // console.log(data.status==="Success");
    if (data.status === "Success") {
      return data;
    }
    throw Error;
  } catch (error) {
    console.log(error);
  }
};

export const getKilnLatestdata = async (formData, token) => {
  const payload = {
    Plant_Code: formData.plant,
    Kiln: formData.kilnNo,
  };
  try {
    const { data } = await axios.post(
      `${BASE_URL}opt/kilnAdmin/getKilnMaster`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    if (data.status === "Success") {
      return data;
    }
    throw Error;
  } catch (error) {
    console.log(error);
  }
};

export const updateKilnMaster = async (payload, token) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}opt/kilnAdmin/updateKilnMaster`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(data);
    if (data.status === "Success") {
      return data;
    }
    throw Error;
  } catch (error) {
    console.log(error);
  }
};
