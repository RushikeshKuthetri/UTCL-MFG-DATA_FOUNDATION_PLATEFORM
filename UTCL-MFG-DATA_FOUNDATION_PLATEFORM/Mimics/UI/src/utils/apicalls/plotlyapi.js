import axios from "axios";
import { BASE_URL, DOWNLOAD_HANDLER_URL } from "../../base";
import { endTimePayload } from "../../data/payload/endTimePayload";
import moment from "moment";
import { getHoTagDetails } from "./centralisedDashboard";

export const trendChartPlotlyApi = async (
  tagLabel,
  dispatch,
  filterData,
  startDate,
  authProvider,
  tagData,
  isHoDashboard = false
) => {
  console.log("PARAMETERS", { filterData })
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
      interval: "auto",
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
        const response = await axios.post(`${BASE_URL}plotly/trends`, payload, {
          responseType: "json",
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Response Data:", response.data);

        let flattenedData = [];

        if (!response.data) {
          dispatch({ type: "LOADING_FALSE" });
          dispatch({ type: "ERROR", payload: "Data not found!!" });
          return [];
        }

        if (Array.isArray(response.data)) {
          flattenedData = response.data;
        } else if (
          typeof response.data === "object" &&
          response.data.allResults
        ) {
          flattenedData = response.data.allResults;
        }

        MinMaxdata = response.data.minMax ? response.data.minMax : [];

        finaldata = [...finaldata, ...flattenedData];

        // ❌ OLD
        // return finaldata;

        // ✅ NEW (ONLY CHANGE)
        return response.data; // <-- Plotly backend response returned as-is Plotly friendly
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch({ type: "LOADING_FALSE" });
        dispatch({
          type: "ERROR",
          payload:
            error.response?.data?.message || "Data not found!!",
        });
        return [];
      }
    };
    const initialData = await fetchData(payload);
    // const formattedData = await getFormattedData(
    //   payload.assetIds,
    //   initialData,
    //   MinMaxdata
    // );
    dispatch({ type: "LOADING_FALSE" });
    // dispatch({ type: "POPUP_DATA", payload: formattedData });

    // dispatch({ type: "SET_LAST_TREND_PAYLOAD", payload: payload }) // saving last payload for variant save
    dispatch({ type: "SET_PLOTLY_DATA", payload: initialData }); // Added to return this for Plotly.Js
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
