/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../base";
import { getLiveDataStatusCondition } from "../getLiveDataStatusCondition";

// export const useLatestData = (plant, plantName, sectionName, section) => {
//   const { token, email } = JSON.parse(localStorage.getItem("login"));
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch({ type: "ADD_PLANT", payload: [`${plant}`] });
//     dispatch({ type: "ADD_SECTION", payload: section });
//     (async function () {
//       dispatch({
//         type: "SHOW_SECTION_IN_NAV",
//         payload: { plantName: plantName, sectionName: sectionName },
//       });
//       const response = await axios.post(
//         `${BASE_URL}latestData`,
//         {
//           userId: email,
//           plants: [`${plant}`],
//         },
//         {
//           headers: {
//             authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       dispatch({ type: "SOCKET_DATA", payload: response.data.result });
//     })();
//   }, []);
// };

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useLatestDataNew = (
  plant,
  plantName,
  sectionName,
  section,
  tagNames
) => {
  const { token, email } = JSON.parse(localStorage.getItem("login"));
  const dispatch = useDispatch();
  const previousData = usePrevious({ tagNames });
  const liveDataStatusCondition = getLiveDataStatusCondition(plant);
  useEffect(() => {
    dispatch({ type: "ADD_PLANT", payload: [`${plant}`] });
    dispatch({ type: "ADD_SECTION", payload: sectionName });

    if (liveDataStatusCondition) {
      if (tagNames?.length) {
        if (
          !previousData ||
          JSON.stringify(previousData.tagNames) != JSON.stringify(tagNames)
        ) {
          const displayTagNames = tagNames
            .filter((item) => item.IsDisplay)
            .map((item) => ({
              propertyId: item.propertyId || item.PropertyId,
              assetId: item.assetId || item.AssetId,
              key: item.key || item.TagName,
            }));
          // console.log("displayTagNames", displayTagNames);
          if (displayTagNames?.length) {
            (async function () {
              dispatch({
                type: "SHOW_SECTION_IN_NAV",
                payload: { plantName: plantName, sectionName: sectionName },
              });
              dispatch({ type: "START_LOADER" });

              const response = await axios.post(
                `${BASE_URL}latestDataNew`,
                {
                  userId: email,
                  tagList: displayTagNames,
                },
                {
                  headers: {
                    authorization: `Bearer ${token}`,
                    // "Accept-Encoding": "*/*"
                  },
                }
              );
              // console.log(response)

              dispatch({ type: "SOCKET_DATA", payload: response.data.result });
              dispatch({ type: "STOP_LOADER" });
            })();
          }
        }
      }
    }
  }, [JSON.stringify(tagNames)]);
};
