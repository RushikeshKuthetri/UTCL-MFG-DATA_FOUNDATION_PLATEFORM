import axios from "axios";
import { BASE_URL } from "../../base";

export const getuserLogs = async (adminProvider, dispatch) => {
  const { email } = JSON.parse(localStorage.getItem("login"));
  const { adminToken, adminEmail } = adminProvider;
  
  try {
    const response = await axios.post(
      `${BASE_URL}admin/accessLogAll`,
      {
        userId: email,
        adminid: adminEmail,
      },
      {
        headers: {
          authorization: `Bearer ${adminToken}`,
        },
      }
    );
    dispatch({ type: "ADMIN_LOG_DATA", payload: response.data.data });
    
  } catch (err) {
    return err;
  }
};
