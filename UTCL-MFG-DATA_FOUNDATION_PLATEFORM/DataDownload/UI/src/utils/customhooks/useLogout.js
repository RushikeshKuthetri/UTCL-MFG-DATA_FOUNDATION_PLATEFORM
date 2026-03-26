/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../base";

export const useLogout = (ip) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  const dispatch = useDispatch();
  const logout = async () =>{
    const payload = { userId: email, Ip: ip };
    const response = await axios.post(
      `${BASE_URL}logAccessLogout`,
      {
          payload
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
          "Accept-Encoding": "*/*",
        },
      }
    );
      console.log(response.data.data);
    if (response?.data?.data?.length) {
        dispatch({
          type: "LOGOUT"
        });
    }
  }
  return
  // useEffect(() => {
  //  logout()
  // }, []);
  // return;
};
