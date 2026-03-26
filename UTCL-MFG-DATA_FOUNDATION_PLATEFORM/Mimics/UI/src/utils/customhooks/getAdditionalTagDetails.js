import axios from "axios";
import { useDispatch } from "react-redux";
// import { BASE_URL } from "../../base";
import { useEffect, useRef } from "react";
import { BASE_URL } from "../../base";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useGetAdditionalTagDetail = (PlantCode, TagDetails) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  const dispatch = useDispatch();
  const previousData = usePrevious({ PlantCode, TagDetails });
  useEffect(() => {
    if (PlantCode && TagDetails && TagDetails.length) {
      if (
        !previousData ||
        previousData.PlantCode != PlantCode ||
        JSON.stringify(previousData.TagDetails) != JSON.stringify(TagDetails)
      ) {
        (async function () {
          const response = await axios.post(
            `${BASE_URL}getAdditionalTagDetails`,
            {
              userId: email,
              PlantCode,
              TagDetails,
            },
            {
              headers: {
                authorization: `Bearer ${token}`,
                "Accept-Encoding": "*/*",
              },
            }
          );
          if (response?.data?.data["Tag Names"]?.length) {
            dispatch({
              type: "ADDITIONAL_SECTION_TAGS_DETAILS",
              payload: {
                tagNames: response.data.data["Tag Names"],
              },
            });
          }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
    }
  }, [PlantCode, JSON.stringify(TagDetails)]);
};
