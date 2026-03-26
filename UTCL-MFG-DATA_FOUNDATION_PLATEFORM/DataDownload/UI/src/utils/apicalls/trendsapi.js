// import axios from "axios";
// import { BASE_URL } from "../../base";
// import { endTimePayload } from "../../data/payload/endTimePayload";

// export const getTrendsData = async (
//   plant,
//   tagName,
//   endDate,
//   startDate,
//   userId,
//   token
// ) => {
//   const response = await axios.post(
//     `${BASE_URL}trendadx`,
//     // "http://localhost:8080/api/trendadx",
//     {
//       plant,
//       tagName,
//       endDate,
//       startDate,
//       interval: "1m",
//       userId,
//     },
//     {
//       headers: {
//         "content-type": "application/json",
//         authorization: `Bearer ${token}`,
//       },
//     }
//   );
//   return response.data;
// };

// export const openTrends = async (
//   tagLabel,
//   dispatch,
//   filterData,
//   startDate,
//   authProvider
// ) => {
//   try {
//     localStorage.setItem("tagLabel", tagLabel);
//     dispatch({ type: "FILTER_ERROR", payload: "" });
//     dispatch({ type: "SHOW_POPUP", payload: { label: tagLabel } });
//     dispatch({ type: "LOADING_TRUE" });
//     dispatch({ type: "ADD_INTERVAL", payload: 1 });
//     dispatch({
//       type: "ADD_SELECTED_TAGNAMES",
//       payload: tagLabel,
//     });
//     const payloadTags = [
//       ...new Set([...filterData.selectedTagnames, tagLabel]),
//     ];
//     const trendResponse = await getTrendsData(
//       filterData.plant[0],
//       payloadTags,
//       endTimePayload(startDate),
//       startDate,
//       authProvider.email,
//       authProvider.token
//     );
//     dispatch({ type: "LOADING_FALSE" });
//     dispatch({
//       type: "POPUP_DATA",
//       payload: trendResponse,
//     });
//   } catch (error) {
//     console.error(error);
//     dispatch({ type: "LOADING_FALSE" });
//     dispatch({
//       type: "ERROR",
//       payload: error.response.data.message
//         ? error.response.data.message
//         : "Data not found!!",
//     });
//   }
// };

// export const openTrendsOnMobile = async (
//   e,
//   lastClick,
//   watingClick,
//   tagLabel,
//   dispatch,
//   filterData,
//   authProvider,
//   startDate
// ) => {
//   if (lastClick && e.timeStamp - lastClick < 250 && watingClick) {
//     lastClick = 0;
//     clearTimeout(watingClick);
//     try {
//       localStorage.setItem("tagLabel", tagLabel);
//       dispatch({ type: "FILTER_ERROR", payload: "" });
//       dispatch({ type: "SHOW_POPUP", payload: { label: tagLabel } });
//       dispatch({ type: "LOADING_TRUE" });
//       dispatch({ type: "ADD_INTERVAL", payload: 1 });
//       dispatch({
//         type: "ADD_SELECTED_TAGNAMES",
//         payload: [`${tagLabel}`],
//       });
//       const trendsDataResponse = await getTrendsData(
//         filterData.plant[0],
//         [`${tagLabel}`],
//         endTimePayload(startDate, filterData.plant[0]),
//         startDate,
//         authProvider.email,
//         authProvider.token
//       );

//       dispatch({ type: "LOADING_FALSE" });
//       dispatch({
//         type: "POPUP_DATA",
//         payload: trendsDataResponse,
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({ type: "LOADING_FALSE" });
//       dispatch({
//         type: "ERROR",
//         payload: "Data not found!!",
//       });
//     }
//     watingClick = null;
//   } else {
//     lastClick = e.timeStamp;
//     watingClick = setTimeout(() => {
//       watingClick = null;
//     }, 251);
//   }
// };

import axios from "axios";
import { BASE_URL, DOWNLOAD_HANDLER_URL } from "../../base";
import { endTimePayload } from "../../data/payload/endTimePayload";
import moment from "moment";
import { getHoTagDetails } from "./centralisedDashboard";

export const getTrendsData = async (
  plant,
  tagName,
  endDate,
  startDate,
  userId,
  token
) => {
  const response = await axios.post(
    `${BASE_URL}trendadx`,
    // "http://localhost:8080/api/trendadx",
    {
      plant,
      tagName,
      endDate,
      startDate,
      interval: "1m",
      userId,
    },
    {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const openTrends = async (
  tagLabel,
  dispatch,
  filterData,
  startDate,
  authProvider
) => {
  try {
    localStorage.setItem("tagLabel", tagLabel);
    dispatch({ type: "FILTER_ERROR", payload: "" });
    dispatch({ type: "SHOW_POPUP", payload: { label: tagLabel } });
    dispatch({ type: "LOADING_TRUE" });
    dispatch({ type: "ADD_INTERVAL", payload: 1 });
    dispatch({
      type: "ADD_SELECTED_TAGNAMES",
      payload: tagLabel,
    });
    const payloadTags = [
      ...new Set([...filterData.selectedTagnames, tagLabel]),
    ];
    const trendResponse = await getTrendsData(
      filterData.plant[0],
      payloadTags,
      endTimePayload(startDate),
      startDate,
      authProvider.email,
      authProvider.token
    );
    dispatch({ type: "LOADING_FALSE" });
    dispatch({
      type: "POPUP_DATA",
      payload: trendResponse,
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: "LOADING_FALSE" });
    dispatch({
      type: "ERROR",
      payload: error.response.data.message
        ? error.response.data.message
        : "Data not found!!",
    });
  }
};

export const openTrendsOnMobile = async (
  e,
  lastClick,
  watingClick,
  tagLabel,
  dispatch,
  filterData,
  authProvider,
  startDate
) => {
  if (lastClick && e.timeStamp - lastClick < 250 && watingClick) {
    lastClick = 0;
    clearTimeout(watingClick);
    try {
      localStorage.setItem("tagLabel", tagLabel);
      dispatch({ type: "FILTER_ERROR", payload: "" });
      dispatch({ type: "SHOW_POPUP", payload: { label: tagLabel } });
      dispatch({ type: "LOADING_TRUE" });
      dispatch({ type: "ADD_INTERVAL", payload: 1 });
      dispatch({
        type: "ADD_SELECTED_TAGNAMES",
        payload: [`${tagLabel}`],
      });
      const trendsDataResponse = await getTrendsData(
        filterData.plant[0],
        [`${tagLabel}`],
        endTimePayload(startDate, filterData.plant[0]),
        startDate,
        authProvider.email,
        authProvider.token
      );

      dispatch({ type: "LOADING_FALSE" });
      dispatch({
        type: "POPUP_DATA",
        payload: trendsDataResponse,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING_FALSE" });
      dispatch({
        type: "ERROR",
        payload: "Data not found!!",
      });
    }
    watingClick = null;
  } else {
    lastClick = e.timeStamp;
    watingClick = setTimeout(() => {
      watingClick = null;
    }, 251);
  }
};

export const trendChartApi = async (
  tagLabel,
  dispatch,
  filterData,
  startDate,
  authProvider,
  tagData,
  isHoDashboard = false
) => {
  // console.log("PARAMETERS", {tagLabel, dispatch, filterData, startDate, authProvider, isHoDashboard})
  dispatch({ type: "START_LOADER" });
  try {
    console.log("--------------------I M HERE-----------");
    // const { token, email } = JSON.parse(localStorage.getItem("login"));
    localStorage.setItem("tagLabel", tagLabel);
    dispatch({ type: "FILTER_ERROR", payload: "" });
    dispatch({ type: "SHOW_POPUP", payload: { label: tagLabel } });
    dispatch({ type: "LOADING_TRUE" });
    dispatch({ type: "ADD_INTERVAL", payload: 1 });
    dispatch({
      type: "ADD_SELECTED_TAGNAMES",
      payload: tagLabel,
    });

    let endDate = moment(startDate).toISOString();
    let newstartDate = endTimePayload(endDate);

    endDate = moment(startDate).add(1, "minutes").toISOString(); // add 2 minutes to endDate

    const payloadTags = [
      ...new Set([...filterData.selectedTagnames, tagLabel]),
    ];
    let tagnames = authProvider?.plantBasedTagnames;
    let additionalTagNames = authProvider?.extraTagDetails;
    const hoTagNames = authProvider?.hoTagDetails?.length ? authProvider.hoTagDetails : [];
    let finalTagNames = [];

    if (tagnames && tagnames.length) {
      finalTagNames = [...finalTagNames, ...tagnames];
    }

    if (additionalTagNames && additionalTagNames.length) {
      finalTagNames = [...finalTagNames, ...additionalTagNames];
    }
    if (hoTagNames && hoTagNames.length) {
      finalTagNames = [...finalTagNames, ...hoTagNames];
    }
    let assetIds = [];
    if (payloadTags && payloadTags.length > 0) {
      assetIds = payloadTags
        .map((tag) => {
          const matchedTag = finalTagNames.find(
            (tagItem) => tagItem.TagName == tag
          );
          if (matchedTag) {
            return {
              assetId: matchedTag.assetId,
              propertyId: matchedTag.propertyId,
              TagUID: matchedTag.TagUID,
              description: matchedTag.description,
              UnitOfMeasurement: matchedTag.UnitOfMeasurement,
              TagName: matchedTag.TagName,
            };
          }
          return null;
        })
        .filter((tagItem) => tagItem !== null);
    }

    // const funcName = 'utcl-service-dev-DownloadLambdaThree'
    let payload = {
      userId: authProvider.email,
      assetIds: assetIds,
      tagNames: assetIds.length ? assetIds.map((item) => item.TagUID) : [],
      startDate: moment(newstartDate).toISOString(),
      endDate: endDate,
      interval: "1m",
      plants: filterData.plant,
      isMobile: false,
      IsTrendChart: true,
      uids: assetIds.length
        ? assetIds.map((item) => `${item.TagUID}:${item.description}`)
        : [],
      IsManual: true,
    };

    if (isHoDashboard) {
      const tagDetail = await getHoTagDetails({ tagName: tagLabel });
      if (tagDetail?.length) {
        const findItem = tagDetail.find(
          (item) => item[`Generic Code`] === filterData.plant[0]
        );
        if (findItem) {
          payload.assetIds = [
            {
              assetId: findItem?.assetId,
              propertyId: findItem?.propertyId,
              TagUID: findItem[`TPH UID`],
              description: findItem?.Description || "",
              UnitOfMeasurement: "",
              TagName: tagLabel,
            },
          ];
          payload.tagNames = [findItem[`TPH UID`]];
          payload.uids = [`${findItem[`TPH UID`]}:`];
        }
      }
    }

    let finaldata = [];
    let MinMaxdata = [];
    const fetchData = async (payload) => {
      try {
        const response = await axios.post(DOWNLOAD_HANDLER_URL, payload, {
          responseType: "json", // Assume API returns JSON
          headers: {
            "Content-Type": "application/json",
          },
        });

        // console.log("payload Data in fecth:",payload);
        console.log("Response Data:", response.data);

        // Check if response data is empty
        // if (!response.data || response.data.length === 0) {
        //   dispatch({ type: "LOADING_FALSE" });
        //   dispatch({
        //     type: "ERROR",
        //     payload: "Data not found!!",
        //   });
        //   return []; // Stop further execution
        // }

        // Check if response data exists
        let flattenedData = [];

        if (!response.data) {
          console.log(" if (!response.data) { --");
          if (localStorage.getItem("trendIntervalID")) {
            console.log(
              "localStorage.getItem(trendIntervalID) trendsAPI --",
              localStorage.getItem("trendIntervalID")
            );
            // clearInterval(localStorage.getItem("trendIntervalID"))
            dispatch({ type: "LOADING_FALSE" });
            return [];
          }

          dispatch({ type: "LOADING_FALSE" });
          dispatch({ type: "ERROR", payload: "Data not found!!" });
          return [];
        }

        // Check if response.data is an array
        if (Array.isArray(response.data)) {
          flattenedData = response.data;
          console.log("if (Array.isArray(response.data)) { --");

          if (response.data.length === 0) {
            console.log("if (response.data.length === 0) { --");

            if (localStorage.getItem("trendIntervalID")) {
              console.log(
                "localStorage.getItem(trendIntervalID) trendsAPI --",
                localStorage.getItem("trendIntervalID")
              );
              // clearInterval(localStorage.getItem("trendIntervalID"))
              // return [];
            }

            dispatch({ type: "LOADING_FALSE" });
            dispatch({ type: "ERROR", payload: "Data not found!!" });
            return [];
          }
        }
        // If response.data is an object, check allResults property
        else if (typeof response.data == "object" && response.data.allResults) {
          flattenedData = response.data.allResults;
          console.log(
            " else if (typeof response.data == object && response.data.allResults) { --"
          );

          if (
            !Array.isArray(response.data.allResults) ||
            response.data.allResults.length === 0
          ) {
            console.log(
              " if (!Array.isArray(response.data.allResults) || response.data.allResults.length == 0) { --"
            );

            if (localStorage.getItem("trendIntervalID")) {
              console.log(
                "localStorage.getItem(trendIntervalID) trendsAPI --",
                localStorage.getItem("trendIntervalID")
              );
              clearInterval(localStorage.getItem("trendIntervalID"));
              // return [];
            }

            dispatch({ type: "LOADING_FALSE" });
            dispatch({ type: "ERROR", payload: "Data not found!!" });
            return [];
          }
        }
        //

        MinMaxdata = response.data.minMax ? response.data.minMax : [];

        // Append new data to finaldata
        finaldata = [...finaldata, ...flattenedData];
        // finaldata = [...flattenedData];
        // console.log("finaldata --",finaldata)

        // console.log("Updated Final Data:", finaldata);

        return finaldata;
      } catch (error) {
        console.error("Error fetching data:", error);

        if (localStorage.getItem("trendIntervalID")) {
          console.log(
            "localStorage.getItem(trendIntervalID) trendsAPI --",
            localStorage.getItem("trendIntervalID")
          );
          // clearInterval(localStorage.getItem("trendIntervalID"))
          return [];
        }
        dispatch({ type: "LOADING_FALSE" });
        dispatch({
          type: "ERROR",
          payload: error.response?.data?.message
            ? error.response.data.message
            : "Data not found!!",
        });
        return []; // Stop further execution
      }
    };
    const initialData = await fetchData(payload);
    const formattedData = await getFormattedData(
      payload.assetIds,
      initialData,
      MinMaxdata
    );
    dispatch({ type: "LOADING_FALSE" });
    dispatch({ type: "POPUP_DATA", payload: formattedData });
  } catch (error) {
    console.log("Error in trendChartApi: ", error);
    console.error(error);
    dispatch({ type: "LOADING_FALSE" });
    dispatch({
      type: "ERROR",
      payload: error.response.data.message
        ? error.response.data.message
        : "Data not found!!",
    });
  }
  dispatch({ type: "STOP_LOADER" });
};

const getUpdatedTimestamps = (
  previousStartDate,
  previousEndDate,
  shiftMs = 60000
) => {
  if (!previousEndDate || !previousStartDate) {
    // console.error("Invalid previousEndDate:", previousEndDate);
    return { updatedStartDate: null, updatedEndDate: null };
  }

  const endDateObj = new Date(previousEndDate);
  const startDateObj = new Date(previousStartDate);

  if (isNaN(endDateObj.getTime()) || isNaN(startDateObj.getTime())) {
    // console.error("Invalid Date object:", previousEndDate);
    return { updatedStartDate: null, updatedEndDate: null };
  }

  // Updated startDate should be the previous endDate
  startDateObj.setTime(startDateObj.getTime() + shiftMs);
  const updatedStartDate = startDateObj.toISOString();

  // Add shiftMs (1 minute)
  endDateObj.setTime(endDateObj.getTime() + shiftMs);
  const updatedEndDate = endDateObj.toISOString();

  return { updatedStartDate, updatedEndDate };
};

export const getFormattedData = async (data, responseData, MinMaxdata) => {
  try {
    // Extract unique timestamps and sort them
    // const uniqueTimestamps = [...new Set(responseData.map(item => item.timestamp))].sort((a, b) => new Date(a) - new Date(b));
    const uniqueTimestamps = [
      ...new Set(
        responseData.map((item) => {
          let timestamp = new Date(item.timestamp);
          timestamp.setUTCHours(timestamp.getUTCHours() - 5);
          timestamp.setUTCMinutes(timestamp.getUTCMinutes() - 30);
          return timestamp.toLocaleString("en-IN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true, // Ensures the time is in 12-hour format with AM/PM
          });
        })
      ),
    ].sort((a, b) => new Date(a) - new Date(b));
    // console.log(uniqueTimestamps)
    let timeValueArr = [];

    for (const tag of data) {
      // console.log('----ttt------', tag)
      let obj = {
        name: tag.TagName,
        showInLegend: true,
        zIndex: 1,
      };
      // for(const item of responseData) {
      // const tagWiseData = responseData.filter(i=>i.tagUID == tag.TagUID)
      const filteredData = responseData
        .filter((item) => item.tagUID == tag.TagUID)
        .map((item) => {
          // Parse the timestamp using moment
          let date = moment(item.timestamp);

          // Define the target date (January 29, 2025)
          const targetDate = moment("2025-01-29T00:00:00");

          // Check if the date is after the target date
          if (date.isAfter(targetDate)) {
            // Subtract 5 hours and 30 minutes
            date.subtract(5, "hours").subtract(30, "minutes");
          }

          // Return the array with the formatted date and average value
          let arr = [
            date.format("DD/MM/YYYY, hh:mm A"), // Format the date in a readable string format
            item.averageValue === "NaN" ? null : item.averageValue,
          ];

          return arr;
        });
      // console.log('---fff-----', filteredData)
      obj.data = filteredData;
      timeValueArr.push(obj);
    }
    let finalOutput = {
      seriesData: timeValueArr,
      uniqueDataDateTime: uniqueTimestamps,
      // minMax: []
      minMax: MinMaxdata,
    };
    return finalOutput;
  } catch (error) {
    console.log("----errorr----", error);
  }
};

export const openGrafana = async (tagName, plantCode, authProvider) => {
  let url = `${process.env[`REACT_APP_GRAFANA_URL_${plantCode}`]}`;
  // console.log("URL 1", url);
  const tagNames = authProvider?.plantBasedTagnames;
  const additionalTagNames = authProvider?.extraTagDetails;

  let finalTagNames = [];

  if (tagNames && tagNames.length) {
    finalTagNames = [...finalTagNames, ...tagNames];
  }

  if (additionalTagNames && additionalTagNames.length) {
    finalTagNames = [...finalTagNames, ...additionalTagNames];
  }
  const tagDetail = finalTagNames.find(
    (item) => `${item.TagName}` === `${tagName}`
  );
  if (tagDetail) {
    const tagPath = tagDetail?.Path;
    if (tagPath) {
      url = url + tagPath;
      // console.log("URL 2", url);
      window.open(url, "_blank");
    }
  }
};
