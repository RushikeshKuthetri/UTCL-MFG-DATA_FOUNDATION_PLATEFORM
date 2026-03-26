import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../base";
import { useEffect } from "react";

export const useSectionTagDetails = (plantCode, line, sectionName) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const plants = [{ Plant: plantCode, Line: line, Section: sectionName }];
      const response = await axios.post(
        `${BASE_URL}sectionTagDetailsNew`,
        {
          userId: email,
          plants,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Accept-Encoding": "*/*",
          },
        }
      );
      //   console.log(response.data.data["Tag Names"]);
      if (response?.data?.data["Tag Names"]?.length) {
          dispatch({
            type: "SECTION_TAGS_DETAILS",
            payload: {
              tagNames: response.data.data["Tag Names"],
            },
          });
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
