import { useState } from "react";
import moment from "moment";
import Highlighter from "react-highlight-words";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { getPlants, minsIntervalOptions } from "../../../utils";
import { getTagnameBasedOnPlantAndSection } from "../../../utils/SelectionBoxOptions/getTagname";
import { getSectionBasedOnPlant } from "../../../utils/SelectionBoxOptions/sectionOption";
import { FiDownload } from "react-icons/fi";
import { isMobile } from "react-device-detect";
import axios from "axios";
import { BASE_URL, DOWNLOAD_HANDLER_URL } from "../../../base";
import { Alert } from "../../Alert/Alert";
import { ClipLoader } from "react-spinners";
import { useRef } from "react";
import { useEffect } from "react";
import "./TrendFilterCard.css";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { getTagUID } from "../../../utils/getTagUID";

import { FilterLabel } from "../FilterInput/FilterLabel";
import { InputValidationText } from "../FilterInput/InputValidationText";
import { endTimePayload } from "../../../data/payload/endTimePayload";
import { getLinesBasedOnPlant } from "../../../utils/SelectionBoxOptions/linesOption";
import {
    endDateValidation,
    intervalValidation,
    plantValidation,
    startDateValidation,
    tagValidation,
} from "../../../utils/filterValidation/filterValidation";
import { getSectionTagDetailsAPIx } from "../../../utils/apicalls/authapi"
import { getHoTagDetails } from "../../../utils/apicalls/centralisedDashboard";
import TagSelectionModal from "../Modal/TagSelectionModal";
import { X } from "lucide-react";

export const TrendFilterCard = ({ showingInTrend, data }) => {
    const selectedPlant = useRef();
    const selectedLine = useRef();
    const selectedSection = useRef();
    const selectedTag = useRef();
    const { filterData, authProvider, userStatus, showPopup, tagNames } = useSelector(
        (state) => state
    );

    const quickRange = useSelector(
        (state) => state.plotlyProvider.quickRange
    );
    const [sectionDropDisable, setSectionDropDisable] = useState(true);
    const [inputArr, setInputArr] = useState([]);
    const dispatch = useDispatch();
    const [plantSelected, setPlantSelected] = useState([]);
    const [sectionSelected, setSectionSelected] = useState("");
    const [tagsData, setTagsData] = useState([]);

    const [isChartLoading, setIsChartLoading] = useState(false);
    const [lineSelected, setLineSelected] = useState(null);
    const [tagSelected, setTagSelected] = useState([]);
    const [allTagSelected, setAllTagSelected] = useState(false);
    const [intervalSelected, setIntervalSelected] = useState("");
    const [endDate, setEndDate] = useState(showingInTrend ? new Date() : new Date());
    const [startDate, setStartDate] = useState(null);
    // const [startDate, setStartDate] = useState(
    //     showingInTrend ? new Date(endTimePayload(endDate, data.plant[0])) : null
    // );
    const [validationErrorMsg1, setValidationErrorMsg1] = useState({
        plant: "",
        tag: "",
        startDate: "",
        endDate: "",
        interval: "",
    });
    const [isFilterChanged, setIsFilterChanged] = useState(false)

    //  Added for tag list modal by TRDIAI on 31-01-2026
    const [tagListModalOpen, setTagListModalOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [filteredTags, setFilteredTags] = useState([]);
    const [tempSelectedTags, setTempSelectedTags] = useState([]);



    const quickRangeTriggeredRef = useRef(false);
    const blockInitialFetchRef = useRef(true);
    const manualDateChangeRef = useRef(false);

    // const activeVariant = useSelector(
    //     (state) => state.plotlyProvider.activeVariant
    // );
    const { activeVariant, XaxisScrollDates } = useSelector((state) => state.plotlyProvider);

    useEffect(() => {
        // if (!showingInTrend || !endDate) return;
        const calculatedStart =
            new Date(endTimePayload(endDate, data.plant[0]));
        setStartDate(calculatedStart);
        setIntervalSelected({
            label: "Auto",
            value: "auto",
        });
        blockInitialFetchRef.current = true;
    }, []);

    // Added to call api when user selects variant from dropdown
    useEffect(() => {
        console.log("Calling this because variantId is chnaged", activeVariant?.variantId);
        if (!activeVariant?.requestPayload) return;
        const vp = activeVariant.requestPayload;
        if (vp.plants?.length) {
            setPlantSelected(
                vp.plants.map(p => ({ label: p, value: p }))
            );
            setSectionDropDisable(false);
        }
        if (vp.tagNames?.length && vp.uids?.length) {
            const tagsFromVariant = vp.tagNames.map((tagUID, index) => ({
                value: tagUID,
                label: vp.uids[index],
            }));

            setTagSelected(tagsFromVariant);
            setAllTagSelected(false);
        }
        const now = new Date();
        const oneHourBack = new Date(now.getTime() - 60 * 60 * 1000);

        setEndDate(now);
        setStartDate(oneHourBack);
        setIntervalSelected({
            label: "1 min",
            value: "1m",
        });

        setIsFilterChanged(true);
        quickRangeTriggeredRef.current = true;
    }, [activeVariant?.variantId]);


    useEffect(() => {

        if (!XaxisScrollDates?.startDate) return;

        console.log("📈 Scroll startDate received");

        manualDateChangeRef.current = false; // allow fetch

        setStartDate(new Date(XaxisScrollDates.startDate));
        console.log("X axis scrolled startdate changed============================>")

        // ❌ do NOT touch endDate

    }, [XaxisScrollDates.startDate]);


    useEffect(() => {
        return () => {
            // 🔥 Reset Redux scroll dates
            dispatch({
                type: "SET_X_AXIS_SCROLL_DATES",
                payload: {
                    startDate: null,
                    endDate: null,
                },
            });
            // 🔥 Reset local state
            setStartDate(null);
            setEndDate(new Date()); // or null if you prefer
        };
    }, []);

    useEffect(() => {
        console.log("Inside the quickRange useEffect of FilterCardTrend.jsx");
        if (!quickRange?._ts || !endDate) return;

        let start = moment(endDate);
        if (quickRange.days) start.subtract(quickRange.days, "days");
        if (quickRange.weeks) start.subtract(quickRange.weeks, "weeks");
        if (quickRange.months) start.subtract(quickRange.months, "months");
        if (quickRange.years) start.subtract(quickRange.years, "years");
        quickRangeTriggeredRef.current = true;
        setStartDate(start.toDate());
        setIsFilterChanged(true);
    }, [quickRange?._ts]);


    // useEffect(() => {
    //     if (!quickRangeTriggeredRef.current) return;
    //     if (!startDate) return;
    //     fetchDataHandler(); // ✅ startDate is now updated
    //     quickRangeTriggeredRef.current = false; // reset
    // }, [startDate]);


    useEffect(() => {
        if (!startDate) return;

        // 🚫 block first automatic set
        if (blockInitialFetchRef.current) {
            blockInitialFetchRef.current = false;
            return;
        }

        // 🚫 block manual date changes
        if (manualDateChangeRef.current) {
            manualDateChangeRef.current = false; // reset
            return;
        }

        console.log("✅ fetchDataHandler allowed");
        fetchDataHandler();

    }, [startDate]);




    useEffect(() => {
        if (tagListModalOpen) {
            const tags = tagOptions.filter(tag => tag.value !== "all");
            setFilteredTags(tags);
            setTempSelectedTags(tagSelected.map(t => t.value));
        }
    }, [tagListModalOpen]);

    const searchTags = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchInput(value);

        const filtered = tagOptions
            .filter(tag => tag.value !== "all")
            .filter(tag =>
                tag.label.toLowerCase().includes(value)
            );

        setFilteredTags(filtered);
    };

    const toggleTagSelection = (tagValue) => {
        setTempSelectedTags(prev =>
            prev.includes(tagValue)
                ? prev.filter(v => v !== tagValue)
                : [...prev, tagValue]
        );
    };

    const applySelectedTags = () => {
        const selected = tagOptions.filter(tag =>
            tempSelectedTags.includes(tag.value)
        );

        setTagSelected(selected);   // 🔥 MAIN STATE UPDATE
        setTagListModalOpen(false);
        setSearchInput("");
    };



    const additionalTagNames =
        authProvider &&
            authProvider.extraTagDetails &&
            authProvider.extraTagDetails.length
            ? authProvider.extraTagDetails
            : [];
    const hoTagNames = authProvider &&
        authProvider.hoTagDetails &&
        authProvider.hoTagDetails.length
        ? authProvider.hoTagDetails
        : [];


    const getTagnameBasedOnPlantAndSectionx = () => {
        let allTags = [...tagsData, ...additionalTagNames, ...hoTagNames];
        // Check if 'Tag Names' exists and has data
        if (!allTags || allTags.length === 0) {
            // console.log("No Tag Names found or empty.");
            return [];
        }

        return lineSelected && sectionSelected
            ? [...tagsData, ...additionalTagNames, ...hoTagNames]
                .filter((tag) =>
                    plantSelected.some(
                        (plant) =>
                            tag.Plant === plant.value && // Match Plant
                            // tag.Line === lineSelected.value && // Match Line
                            (showingInTrend || tag.Line === lineSelected.value) && // Conditionally match Line
                            tag.Section === sectionSelected.value // Match Section
                    )
                )
                .map((tag) => ({
                    // label: tag["TagUID"], // Set label as TagUID
                    label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""}`, // Set label as TagUID with description
                    value: tag["TagUID"], // Set value as TagName
                }))
            : lineSelected && !sectionSelected
                ? [...tagsData, ...additionalTagNames, ...hoTagNames]
                    .filter((tag) =>
                        plantSelected.some(
                            (plant) =>
                                tag.Plant === plant.value && // Match Plant
                                (showingInTrend || tag.Line === lineSelected.value) // Conditionally match Line
                        )
                    )
                    .map((tag) => ({
                        // label: tag["TagUID"], // Set label as TagUID
                        label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""}`, // Set label as TagUID with description
                        value: tag["TagUID"], // Set value as TagName
                    }))
                : !lineSelected && sectionSelected
                    ? [...tagsData, ...additionalTagNames, ...hoTagNames]
                        .filter((tag) =>
                            plantSelected.some(
                                (plant) =>
                                    tag.Plant === plant.value && // Match Plant
                                    tag.Section === sectionSelected.value // Match Section
                            )
                        )
                        .map((tag) => ({
                            // label: tag["TagUID"], // Set label as TagUID
                            label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""}`, // Set label as TagUID with description
                            value: tag["TagUID"], // Set value as TagName
                        }))
                    : !lineSelected && !sectionSelected
                        ? [...tagsData, ...additionalTagNames]
                            .filter((tag) =>
                                plantSelected.some(
                                    (plant) => tag.Plant === plant.value // Match Plant
                                )
                            )
                            .map((tag) => ({
                                // label: tag["TagUID"], // Set label as TagUID
                                label: `${tag["TagUID"]}_:${tag.description ? tag.description : ""}`, // Set label as TagUID with description
                                value: tag["TagUID"], // Set value as TagName
                            }))
                        : [];
    };

    let tagOptions = showingInTrend
        ? [
            { label: "Select All", value: "all" },
            getTagnameBasedOnPlantAndSectionx()
        ].flat()
        : plantSelected.length <= 1
            ? [
                { label: "Select All", value: "all" },
                getTagnameBasedOnPlantAndSectionx()

            ].flat()
            : [
                getTagnameBasedOnPlantAndSectionx()
            ].flat();


    /// go button click functionality//
    const fetchDataHandler = async () => {
        console.log("Calling fetchDataHandler===================>", filterData.plant)
        try {
            dispatch({ type: "FILTER_ERROR", payload: "" });
            dispatch({ type: "LOADING_TRUE" });
            setIsChartLoading(true);
            // console.log("downloadHandler tagSelected assetIds --",tagSelected);

            let assetIds = [];
            let allTags = [...tagsData, ...additionalTagNames, ...hoTagNames];
            // console.log({allTags, tagSelected})
            if (allTags && allTags?.length > 0) {
                assetIds = tagSelected.map((tag) => {
                    // const matchedTag = tagsData.find((data) => data.TagUID === tag.label);
                    const matchedTag = allTags.find(
                        (item) => item.TagUID == tag.value || item.TagName == tag.value
                    );
                    if (matchedTag) {
                        return {
                            assetId: matchedTag.assetId,
                            propertyId: matchedTag.propertyId,
                            TagUID: matchedTag.TagUID,
                            description: matchedTag.description,
                            UnitOfMeasurement: matchedTag.UnitOfMeasurement,
                            TagName: matchedTag.TagName
                        };
                    }
                    return null; // If no match is found, you can return null or handle it as needed.
                }).filter((item) => item !== null); // Remove null values if no match is found.
            }
            let payload = {
                "userId": authProvider.email,
                "assetIds": assetIds,
                "tagNames": allTagSelected === true
                    ? []
                    : tagSelected.map((obj) => obj.value),
                "uids": tagSelected.map((obj) => obj.label),
                "startDate": moment(startDate).toISOString(),
                "endDate": moment(endDate).toISOString(),
                "interval": `${intervalSelected?.value}`,
                "plants": filterData.plant,
                "isMobile": false,
                "IsTrendChart": true,
                // "uids": tagData.length ? [tagData[0].TagUID] : [],
                "IsManual": true
            }
            if (window.location.href.includes("ho/millsrunningstatus")) {
                const tagDetail = await getHoTagDetails({ tagName: data.tagname[0] })
                if (tagDetail?.length) {
                    const findItem = tagDetail.find(item => item[`Generic Code`] === filterData.plant[0])
                    if (findItem) {
                        payload.assetIds = [{
                            "assetId": findItem?.assetId,
                            "propertyId": findItem?.propertyId,
                            "TagUID": findItem[`TPH UID`],
                            "description": findItem?.Description || "",
                            "UnitOfMeasurement": "",
                            "TagName": data.tagname
                        }]
                        payload.tagNames = [findItem[`TPH UID`]]
                        payload.uids = [`${findItem[`TPH UID`]}:`]
                    }
                }
            }
            let finaldata = [];
            let MinMaxdata = [];
            const fetchData = async (payload) => {
                // try {
                //   const response = await axios.post(
                //     DOWNLOAD_HANDLER_URL,
                //     payload,
                //     {
                //       responseType: 'json', // Assume API returns JSON
                //       headers: {
                //         "Content-Type": "application/json",
                //       },
                //     }
                //   );
                try {
                    const response = await axios.post(`${BASE_URL}plotly/trends`,
                        payload,
                        {
                            responseType: 'json', // Assume API returns JSON
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    // console.log("payload Data in fecth:",payload);
                    console.log("Response Data:", response.data);
                    //dispatch({ type: "LOADING_FALSE" });
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
                    setIsChartLoading(false);
                    let flattenedData = [];

                    if (!response.data) {
                        // console.log(" if (!response.data) { --")
                        if (localStorage.getItem("trendIntervalID")) {
                            // console.log("localStorage.getItem(trendIntervalID) trendsAPI --",localStorage.getItem("trendIntervalID"))
                            // clearInterval(localStorage.getItem("trendIntervalID"))
                            dispatch({ type: "LOADING_FALSE" });
                            return [];
                        }
                        setIsChartLoading(false);
                        dispatch({ type: "LOADING_FALSE" });
                        dispatch({ type: "ERROR", payload: "Data not found!!" });
                        return [];
                    }

                    // Check if response.data is an array
                    if (Array.isArray(response.data)) {
                        flattenedData = response.data
                        // console.log("if (Array.isArray(response.data)) { --")

                        if (response.data.length == 0) {
                            // console.log("if (response.data.length === 0) { --")

                            if (localStorage.getItem("trendIntervalID")) {
                                // console.log("localStorage.getItem(trendIntervalID) trendsAPI --",localStorage.getItem("trendIntervalID"))
                                // clearInterval(localStorage.getItem("trendIntervalID"))
                                return [];
                            }
                            // setIsChartLoading(false);
                            // dispatch({ type: "LOADING_FALSE" });
                            dispatch({ type: "ERROR", payload: "Data not found!!" });
                            return [];
                        }
                    }

                    else if (typeof response.data == "object" && response.data.allResults) {
                        flattenedData = response.data.allResults

                        if (!Array.isArray(response.data.allResults) || response.data.allResults.length == 0) {
                            if (localStorage.getItem("trendIntervalID")) {

                                return [];
                            }

                            setIsChartLoading(false);
                            dispatch({ type: "ERROR", payload: "Data not found!!" });
                            return [];
                        }
                    }
                    //
                    MinMaxdata = response.data.minMax ? response.data.minMax : []
                    finaldata = [...finaldata, ...flattenedData];
                    return response.data;
                } catch (error) {
                    console.error("Error fetching data:", error);

                    if (localStorage.getItem("trendIntervalID")) {
                        console.log("localStorage.getItem(trendIntervalID) trendsAPI --", localStorage.getItem("trendIntervalID"))

                        return [];
                    }
                    setIsChartLoading(false);
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

            const getFormattedData = async (data, responseData, MinMaxdata) => {
                try {
                    const uniqueTimestamps = [...new Set(responseData.map(item => {
                        let timestamp = new Date(item.timestamp);
                        timestamp.setUTCHours(timestamp.getUTCHours() - 5);
                        timestamp.setUTCMinutes(timestamp.getUTCMinutes() - 30);
                        return timestamp.toLocaleString('en-IN', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true         // Ensures the time is in 12-hour format with AM/PM
                        });

                    }

                    ))].sort((a, b) => new Date(a) - new Date(b));

                    let timeValueArr = []

                    for (const tag of data) {
                        let obj = {
                            name: tag.TagName,
                            "showInLegend": true,
                            "zIndex": 1
                        }
                        const filteredData = responseData.filter(item => item.tagUID == tag.TagUID)
                            .map(item => {
                                let timestamp = new Date(item.timestamp);
                                timestamp.setUTCHours(timestamp.getUTCHours() - 5);
                                timestamp.setUTCMinutes(timestamp.getUTCMinutes() - 30);
                                let arr = [
                                    // item.timestamp,
                                    timestamp.toLocaleString('en-IN', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true         // Ensures the time is in 12-hour format with AM/PM
                                    }),
                                    item.averageValue == "NaN" ? null : item.averageValue
                                ]
                                return arr
                            });

                        obj.data = filteredData
                        timeValueArr.push(obj)
                    }
                    let finalOutput = {
                        seriesData: timeValueArr,
                        uniqueDataDateTime: uniqueTimestamps,
                        // minMax: []
                        minMax: MinMaxdata
                    }
                    return finalOutput
                } catch (error) {
                    console.log('----errorr----', error)
                }
            }

            const initialData = await fetchData(payload);
            console.log("API calling with these payload===============================>", payload);
            dispatch({ type: "SET_LAST_TREND_PAYLOAD", payload: payload }); // Added to set last payload for trend chart
            const formattedData = await getFormattedData(
                payload.assetIds,
                initialData,
                MinMaxdata
            );
            setIsChartLoading(false);
            dispatch({ type: "LOADING_FALSE" });
            dispatch({ type: "SET_PLOTLY_DATA", payload: initialData }); // Added to return this for Plotly.Js
        } catch (error) {
            console.log('Error in filter trendChartApi: ', error)
            console.error(error);
            setIsChartLoading(false);
            dispatch({ type: "LOADING_FALSE" });
            dispatch({
                type: "ERROR",
                payload: error.response.data.message
                    ? error.response.data.message
                    : "Data not found!!",
            });
        }

    };

    const downloadHandler = async () => {
        dispatch({ type: "START_LOADER" });
        dispatch({ type: "LOADING_TRUE" });
        try {
            dispatch({
                type: "FILTER_ERROR",
                payload: "",
            });
            let assetIds = []

            assetIds = tagSelected.map((tag) => {
                const matchedTag = [...tagsData, ...additionalTagNames, ...hoTagNames].find(
                    (data) => data.TagUID == tag.value || data.TagName == tag.value
                );
                if (matchedTag) {
                    return {
                        assetId: matchedTag.assetId,
                        propertyId: matchedTag.propertyId,
                        TagUID: matchedTag.TagUID,
                        description: matchedTag.description,
                        UnitOfMeasurement: matchedTag.UnitOfMeasurement,
                        TagName: matchedTag.TagName

                    };
                }
                return null; // If no match is found, you can return null or handle it as needed.
            }).filter((item) => item !== null); // Remove null values if no match is found.

            const plantMsg = plantValidation(plantSelected);
            const tagMsg = tagValidation(tagSelected);
            const startDateMsg = startDateValidation(startDate);
            const endDateMsg = endDateValidation(endDate);
            const intervalMsg = intervalValidation(intervalSelected);
            setValidationErrorMsg1({
                plant: plantMsg,
                tag: tagMsg,
                startDate: startDateMsg,
                endDate: endDateMsg,
                interval: intervalMsg,
            });
            if (
                !plantMsg &&
                !tagMsg &&
                !startDateMsg &&
                !endDateMsg &&
                !intervalMsg
            ) {
                const response = await axios.post(
                    // `${BASE_URL}dataExport`,
                    `${BASE_URL}dataExportNew`,
                    {
                        userId: authProvider.email,
                        assetIds: assetIds,
                        tagNames:
                            allTagSelected === true
                                ? []
                                : tagSelected.map((obj) => obj.value),
                        uids: tagSelected.map((obj) => obj.label),

                        // startDate: moment(startDate).format("YYYY-MM-DDTHH:mm"),
                        // endDate: moment(endDate).format("YYYY-MM-DDTHH:mm"),
                        startDate: moment(startDate).toISOString(),
                        endDate: moment(endDate).toISOString(),
                        interval: `${intervalSelected?.value}`,
                        plants: plantSelected.map((obj) => obj?.label),
                        isMobile,
                    },
                    {
                        headers: {
                            authorization: `Bearer ${authProvider.token}`,
                        },
                    }
                );
                // console.log("response --",response)
                // here write interval code for 5 secs interval, if response.data.requestID exist, call a Api within the interval with requestID in payload and once we get response.data.link, clear the interval

                if (response.data.requestId) {
                    const requestId = response.data.requestId;
                    const timestamp = response.data.timestamp;

                    const intervalId = setInterval(async () => {
                        try {
                            const statusResponse = await axios.post(
                                `${BASE_URL}dataExport/status`, // Assuming this is the API to check status
                                {
                                    requestId: requestId,
                                    timestamp: timestamp,
                                },
                                {
                                    headers: {
                                        authorization: `Bearer ${authProvider.token}`,
                                    },
                                }
                            );
                            if (statusResponse.data.error) {
                                dispatch({ type: "STOP_LOADER" });
                                dispatch({ type: "LOADING_FALSE" });
                                clearInterval(intervalId); // Stop polling if an error occurs
                            } else if (statusResponse.data.link) {
                                window.open(statusResponse.data.link, "_blank");
                                clearInterval(intervalId); // Stop polling once the link is received
                                dispatch({ type: "STOP_LOADER" });
                                dispatch({ type: "LOADING_FALSE" });
                            }
                        } catch (error) {
                            console.error("Error while polling:", error);
                            dispatch({ type: "STOP_LOADER" });
                            dispatch({ type: "LOADING_FALSE" });
                            dispatch({
                                type: "FILTER_ERROR",
                                payload: error.response.data.message,
                            });

                            clearInterval(intervalId); // Stop polling if an error occurs
                        }
                    }, 5000); // Poll every 5 seconds
                }

                if (response.data.link) {
                    window.open(response.data.link, "_blank");
                    dispatch({ type: "STOP_LOADER" });
                    dispatch({ type: "LOADING_FALSE" });
                }
                if (response.data.message) {
                    alert(response.data.message);
                    dispatch({ type: "STOP_LOADER" });
                    dispatch({ type: "LOADING_FALSE" });
                }
            }
        } catch (error) {
            console.error("error download hanlder --", error);
            dispatch({ type: "LOADING_FALSE" });
            dispatch({ type: "STOP_LOADER" });
            dispatch({
                type: "FILTER_ERROR",
                payload: error.response.data.message,
            });
        }
    };


    function formatOptionLabel({ label }, { inputValue }) {
        let labelvalue = typeof label === "object" ? label[0] : label;
        return (
            <Highlighter
                highlightClassName="highlighter"
                highlightStyle={{ backgroundColor: "orange" }}
                searchWords={[inputValue]}
                textToHighlight={labelvalue}
            />
        );
    }

    async function updateSectionData(event) {
        dispatch({
            type: "FILTER_ERROR",
            payload: "",
        });
        if (
            (typeof sectionSelected == "string" && sectionSelected) ||
            (typeof sectionSelected == "object" &&
                Object.keys(sectionSelected).length)
        ) {
            let payload = [];
            if (event.length > 0) {
                payload = event.map((plant) => ({
                    Plant: plant.value,
                    Line: lineSelected.value,
                    Section: sectionSelected.value,
                }));
            }
            const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
            setTagsData([...tagsDatares]);

            tagOptions = showingInTrend
                ? [
                    { label: "Select All", value: "all" },
                    getTagnameBasedOnPlantAndSectionx(),
                ].flat()
                : plantSelected.length <= 1
                    ? [
                        { label: "Select All", value: "all" },
                        getTagnameBasedOnPlantAndSectionx(),
                    ].flat()
                    : [
                        getTagnameBasedOnPlantAndSectionx(),
                    ].flat();
        }
        if (
            (event.length > 1 && allTagSelected === true) ||
            event.length < plantSelected.length
        ) {
            setTagSelected([]);
            setAllTagSelected(false);
        }
        if (event.length > 0) {
            setPlantSelected(event);
            setSectionDropDisable(false);
            getSelectionSelection(event);
        } else if (event.length === 0) {
            setPlantSelected([]);
            setSectionSelected("");
            setTagSelected([]);
            setStartDate(null);
            setEndDate(null);
            setIntervalSelected("");
            setSectionDropDisable(true);
            setLineSelected(null)
        }

        if (event.length) {
            let payload = [];
            payload = event.map((plant) => ({
                Plant: plant.value,
                Line: null,
                Section: null
            }));

            const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
            setTagsData([...tagsDatares]);
        }
    }
    function getSelectionSelection(event) {
        return getSectionBasedOnPlant(
            authProvider.plantBasedSection,
            event.map((obj) => obj?.label)
        );
    }
    function updateLineValue(e) {
        dispatch({
            type: "FILTER_ERROR",
            payload: "",
        });
        if (e === null || e === "") {
            setSectionSelected("");
            setTagSelected([]);
        } else {
            setLineSelected(e);
            setSectionSelected("");
            setTagSelected([]);
        }

        if (e.length) {
            if (plantSelected.length) {
                let payload = [];

                payload = payload = plantSelected.map((plant) => ({
                    Plant: plant.value,
                    Line: showingInTrend ? null : e.value,
                }));
            }
        }
    }
    async function updateTagValue(e) {
        dispatch({
            type: "FILTER_ERROR",
            payload: "",
        });
        console.log({ e })
        if (e === null || e === "") {
            setTagSelected([]);

            let payload = plantSelected.map((plant) => {
                return {
                    Plant: plant.value,
                    Line: null,
                    Section: null,
                };
            });

            const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
            setTagsData([...tagsDatares]);
        } else {
            setSectionSelected(e);
            let payload = [];
            if (plantSelected.length > 0) {
                payload = plantSelected.map((plant) => {
                    if (
                        !showingInTrend &&
                        lineSelected &&
                        lineSelected.value &&
                        e &&
                        e.value
                    ) {
                        return {
                            Plant: plant.value,
                            Line: showingInTrend ? null : lineSelected.value,
                            Section: e.value,
                        };
                    } else if (
                        (showingInTrend ||
                            !lineSelected ||
                            (lineSelected && !lineSelected.value)) &&
                        e &&
                        e.value
                    ) {
                        return {
                            Plant: plant.value,
                            Section: e.value,
                            Line: null
                        };
                    } else if (!e) {
                        return {
                            Plant: plant.value,
                            Line: showingInTrend ? null : lineSelected.value,
                            Section: null,
                        };
                    }
                });
            }

            const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch)
            setTagsData([...tagsDatares])
            if (e.label !== sectionSelected.label) {
                setTagSelected([]);
            }
        }
    }
    function updatetagData(selected) {
        dispatch({
            type: "FILTER_ERROR",
            payload: "",
        });
        setValidationErrorMsg1({ ...validationErrorMsg1, tag: "" });
        selected.find((obj) =>
            obj.value === "all"
                ? setTagSelected(tagOptions.slice(1))
                : setTagSelected(selected)
        );
        selected.find((obj) =>
            obj.value === "all" && sectionSelected === ""
                ? setAllTagSelected(true)
                : setAllTagSelected(false)
        );
        if (selected.length === 0) {
            setTagSelected([]);
        }
    }
    const searchKey = useRef("");

    const handleinputChangetags = (inputValue) => {
        searchKey.current = inputValue.toLowerCase();
        setInputArr(searchKey.current.split(" "));
        let inpArr = inputValue.replaceAll(" ", "").split(",");
        inpArr = inpArr.filter((val) => val !== "");
        let res = [];
        tagOptions.map((val) => {
            inpArr.map((v1) => {
                if (
                    val.label.replaceAll(" ", "").replaceAll(",", "").split("_:")[0] ===
                    v1 ||
                    val.value.split("_:")[0] === v1
                ) {
                    res.push(val);
                }
            });
        });

        let tempArr = [...tagSelected, ...res];
        let unique = [];

        unique = [
            ...new Map(tempArr.map((item) => [item["value"], item])).values(),
        ];
        setTagSelected(unique);
    };
    const filterOption = (candidate) => {
        return (
            candidate.data.__isNew__ ||
            inputArr.every((item) => candidate.label.toLowerCase().includes(item))
        );
    };
    function updateLineValueNew() {
        dispatch({
            type: "FILTER_ERROR",
            payload: "",
        });
        setTagSelected([]);
        setSectionSelected("");
        setLineSelected(null);
    }
    async function updateTagValueNew() {
        dispatch({
            type: "FILTER_ERROR",
            payload: "",
        });
        setTagSelected([]);
        setSectionSelected("");

        let payload = plantSelected.map((plant) => {
            return {
                Plant: plant.value,
                Line: null,
                Section: null,
            };
        });

        const tagsDatares = await getSectionTagDetailsAPIx(payload, dispatch);
        setTagsData([...tagsDatares]);
    }
    function updatePlantValueNew() {
        dispatch({
            type: "FILTER_ERROR",
            payload: "",
        });
        setTagsData([])
        setPlantSelected([]);
        setLineSelected(null);
        setTagSelected([]);
        setSectionSelected("");
        setStartDate(null);
        setEndDate(null);
        setIntervalSelected("");
        setSectionDropDisable(true);
        dispatch({
            type: "ADD_START_DATE",
            payload: "",
        });
        dispatch({ type: "ADD_END_DATE", payload: "" });
    }

    const fetchTagsBasedSection = async () => {
        if (showingInTrend) {
            let payload = []
            if (filterData?.plant.length > 0 && filterData?.section) {
                payload = {
                    "Plant": filterData?.plant[0],
                    "Line": showingInTrend ? null : lineSelected.value,
                    "Section": null,
                    // "Section": filterData?.section ? filterData.section : null,  // Commented to get all  the tag details only based on plant byb TRIDAI on (05-02)
                }
                const tagsDatares = await getSectionTagDetailsAPIx([payload], dispatch)
                setTagsData([...tagsDatares]);
            }
        }
    }
    useEffect(() => {
        if (showingInTrend) {
            const tagWithUID = getTagUID(authProvider.plantBasedTagnames, data);
            setPlantSelected([{ label: data.plant[0], value: data.plant[0] }]);
            let uniqueTags = [
                ...new Map(tagWithUID.map((item) => [item["value"], item])).values(),
            ];
            setTagSelected(uniqueTags);
            setIntervalSelected({
                // label: `${data.interval}min`,
                // value: `${data.interval}m`,
                label: `Auto`,  // chnaged to keep auto as by default 
                value: `${data.interval}`,
            });
            fetchTagsBasedSection();

        } else {
            dispatch({
                type: "ADD_START_DATE",
                payload: startDate,
            });
            dispatch({
                type: "ADD_END_DATE",
                payload: endDate,
            });
        }
    }, [showPopup.minimise]);

    // orange search feature in tags input field
    const formatOptionLabelForTags = ({ label }) => {
        let labelvalue = typeof label === "object" ? label[0] : label;
        return (
            <Highlighter
                highlightClassName="highlighter"
                highlightStyle={{ backgroundColor: "orange" }}
                searchWords={inputArr}
                textToHighlight={labelvalue}
            />
        );
    };


    const customStyles = {
        control: (base, state) => ({
            ...base,
            minHeight: "35px",
            height: "35px",
            width: "150px",
            border: `1px solid ${state.isFocused ? "var(--picker-accent)" : "var(--input-enable-border)"
                }`,
            borderRadius: "8px",
            backgroundColor: "var(--input-enable-bg)",
            fontSize: "13px",
            boxShadow: "none",
            "&:hover": {
                borderColor: "var(--picker-accent)",
            },
        }),

        indicatorSeparator: () => ({
            display: "none", // ← removes the vertical line
        }),

        valueContainer: (base) => ({
            ...base,
            padding: "0 6px",
            height: "35px",
        }),

        indicatorsContainer: (base) => ({
            ...base,
            height: "35px",
        }),

        menu: (base) => ({
            ...base,
            fontFamily: "Inter, sans-serif",
            backgroundColor: "var(--input-enable-bg)",
            borderRadius: "8px",
            zIndex: 9999,
        }),

        option: (base, state) => ({
            ...base,
            fontFamily: "Inter, sans-serif",
            backgroundColor: state.isSelected
                ? "var(--picker-accent)"
                : state.isFocused
                    ? "var(--picker-hover)"
                    : "transparent",
            color: state.isSelected ? "#fff" : "var(--text-color)",
            cursor: "pointer",
            fontSize: "13px",
        }),

        multiValue: (base) => ({
            ...base,
            fontFamily: "Inter, sans-serif",
            backgroundColor: "var(--picker-hover)",
            borderRadius: "6px",
        }),

        multiValueLabel: (base) => ({
            ...base,
            fontFamily: "Inter, sans-serif",
            color: "var(--text-color)",
            fontSize: "12px",
        }),

        multiValueRemove: (base) => ({
            ...base,
            color: "var(--text-color)",
            ":hover": {
                backgroundColor: "var(--picker-accent)",
                color: "#fff",
            },
        }),

        singleValue: (base) => ({
            ...base,
            fontFamily: "Inter, sans-serif",
            color: "var(--text-color)",
        }),

        input: (base) => ({
            ...base,
            fontFamily: "Inter, sans-serif",
            color: "var(--text-color)",
        }),

        placeholder: (base) => ({
            ...base,
            fontFamily: "Inter, sans-serif",
            color: "var(--card-subtle)",
            fontSize: "12px",
        }),
        menuList: (base) => ({
            ...base,
            maxHeight: 170,
            overflowY: "auto",
        }),
    };

    return (
        <>
            <div>
                <div className="flex flex-nowrap items-end gap-3 min-w-max">
                    <div>
                        <Select
                            styles={customStyles}
                            classNamePrefix="select"
                            ref={selectedPlant}
                            placeholder="Select Plant *"
                            value={plantSelected}
                            onChange={updateSectionData}
                            formatOptionLabel={formatOptionLabel}
                            isClearable={false}
                            isSearchable={true}
                            isMulti={true}
                            options={
                                showingInTrend
                                    ? getPlants(data.plant)
                                    : getPlants(authProvider?.plants)
                            }
                        />

                        {validationErrorMsg1.plant && (
                            <InputValidationText
                                validationMessage={validationErrorMsg1.plant}
                            />
                        )}

                        <div className="cutomremoveindi">
                            {plantSelected.length === 0 || (
                                <button onClick={updatePlantValueNew} className="p-2 btn">
                                    <i className="fa-sharp fa-solid fa-xmark"></i>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Line selection removed for because it is not required for Trends  */}
                    <div>
                        {/* <FilterLabel filtername="Section Name" mandatory={false} /> */}
                        <Select
                            placeholder="Select Section"
                            styles={customStyles}
                            classNamePrefix="select"
                            ref={selectedSection}
                            value={sectionSelected}
                            onChange={updateTagValue}
                            formatOptionLabel={formatOptionLabel}
                            isClearable={false}
                            isSearchable={true}
                            options={
                                showingInTrend
                                    ? getSectionBasedOnPlant(
                                        authProvider.plantBasedSection,
                                        //data.plant,
                                        plantSelected.map((obj) => obj?.label),
                                        lineSelected?.value,
                                    )
                                    : getSectionBasedOnPlant(
                                        authProvider.plantBasedSection,
                                        plantSelected.map((obj) => obj?.label),
                                        lineSelected?.value,
                                    )
                            }
                            isDisabled={!showingInTrend && sectionDropDisable}
                        />
                        <div className="colcustom-2 pl-2 pr-2 cutomremoveindi">
                            {sectionSelected.length === 0 || (
                                <button onClick={updateTagValueNew} className="p-2 btn">
                                    <i className="fa-sharp fa-solid fa-xmark"></i>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Added by TRIDAI for the modal open to select multitags*/}
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setTagListModalOpen(true)}
                            className={` w-[150px] px-2 flex items-center gap-2 rounded-[9px] h-[35px] text-[12px]
      ${validationErrorMsg1.tag
                                    ? "border-red-500"
                                    : "border border-[var(--input-enable-border)]"
                                }
      bg-[var(--input-enable-bg)]`}
                        >
                            {/* Left */}
                            <span className="flex items-center gap-1">
                                <i></i>
                                Select Tags
                            </span>

                            {/* Count */}
                            {tagSelected.length > 0 && (
                                <span className="text-xs mr-4 px-2 py-[2px] rounded bg-[var(--picker-hover)]">
                                    {tagSelected.length}
                                </span>
                            )}
                        </button>

                        {/* Clear button */}
                        {tagSelected.length > 0 && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setTagSelected([]);
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center"
                            >
                                <X size={16} className="text-[var(--text-color)]" />
                            </button>
                        )}

                        {/* Error */}
                        {validationErrorMsg1.tag && (
                            <InputValidationText
                                validationMessage={validationErrorMsg1.tag}
                            />
                        )}
                    </div>

                    {/* Added by TRIDAI - Tag List Modal */}
                    {tagListModalOpen && (
                        <TagSelectionModal
                            isOpen={tagListModalOpen}
                            tags={tagOptions.filter((t) => t.value !== "all")}
                            selectedTags={tagSelected.map((t) => t.value)}
                            onClose={() => setTagListModalOpen(false)}
                            onApply={(selectedValues) => {
                                const selected = tagOptions.filter((tag) =>
                                    selectedValues.includes(tag.value),
                                );
                                setTagSelected(selected);
                                setTagListModalOpen(false);
                            }}
                        />
                    )}
                    {/* Above code added by TRID AI to multi select the tags with checkbox */}

                    <div>
                        {/* <FilterLabel filtername="Start Date " mandatory={true} /> */}
                        <DatePicker
                            selected={startDate}
                            className={`w-full ${validationErrorMsg1.startDate ? "error-input" : ""
                                }`}
                            placeholderText="Click to select a date *"
                            onChange={(date) => {
                                if (date > new Date())
                                    setValidationErrorMsg1({
                                        ...validationErrorMsg1,
                                        startDate: "Please select a valid start date",
                                    });
                                else {
                                    manualDateChangeRef.current = true;
                                    setStartDate(date);
                                    dispatch({
                                        type: "FILTER_ERROR",
                                        payload: "",
                                    });
                                    setValidationErrorMsg1({
                                        ...validationErrorMsg1,
                                        startDate: "",
                                    });
                                    dispatch({
                                        type: "ADD_START_DATE",
                                        payload: moment(date).format("YYYY-MM-DDTHH:mm"),
                                    });
                                    setIsFilterChanged(true);
                                }
                            }}
                            showTimeSelect
                            dateFormat="d/MM/yyyy h:mm aa"
                            timeIntervals={1}
                            calendarClassName="rasta-stripes"
                            readOnly={!showingInTrend && sectionDropDisable}
                        />
                        {validationErrorMsg1.startDate && (
                            <InputValidationText
                                validationMessage={validationErrorMsg1.startDate}
                            />
                        )}
                    </div>

                    <div>
                        <DatePicker
                            selected={endDate}
                            placeholderText="Click to select a date *"
                            className={`w-full ${validationErrorMsg1.startDate ? "error-input" : ""
                                }`}
                            onChange={(date) => {
                                dispatch({
                                    type: "FILTER_ERROR",
                                    payload: "",
                                });
                                if (date >= startDate && date <= new Date()) {
                                    setValidationErrorMsg1({
                                        ...validationErrorMsg1,
                                        endDate: "",
                                    });
                                    setEndDate(date);
                                    dispatch({
                                        type: "ADD_END_DATE",
                                        payload: moment(date).format("YYYY-MM-DDTHH:mm"),
                                    });
                                    setIsFilterChanged(true);
                                } else {
                                    setValidationErrorMsg1({
                                        ...validationErrorMsg1,
                                        endDate: "Please select a valid end date",
                                    });
                                }
                            }}
                            showTimeSelect
                            dateFormat="d/MM/yyyy h:mm aa"
                            timeIntervals={1}
                            calendarClassName="rasta-stripes"
                            readOnly={!showingInTrend && sectionDropDisable}
                        />
                        {validationErrorMsg1.endDate && (
                            <InputValidationText
                                validationMessage={validationErrorMsg1.endDate}
                            />
                        )}
                    </div>

                    <div

                        className={`${showingInTrend ? `colcustom-13` : `colcustom-11`}`}
                    >
                        {" "}
                        <Select
                            styles={{
                                ...customStyles,
                                control: (base, state) => {
                                    const original = customStyles.control(base, state); // 👈 destructure original
                                    return {
                                        ...original,
                                        width: "110px", // 👈 override here
                                    };
                                },
                            }}
                            placeholder="Interval *"
                            classNamePrefix="Select"
                            value={intervalSelected}
                            onChange={(selected) => {
                                setValidationErrorMsg1({
                                    ...validationErrorMsg1,
                                    interval: "",
                                });
                                dispatch({ type: "ERROR_FALSE" });
                                setIntervalSelected(selected);
                                setIsFilterChanged(true);
                            }}
                            formatOptionLabel={formatOptionLabel}
                            isClearable={true}
                            isSearchable={true}
                            options={minsIntervalOptions()}
                            isDisabled={!showingInTrend && sectionDropDisable}
                        />
                        {validationErrorMsg1.interval && (
                            <InputValidationText
                                validationMessage={validationErrorMsg1.interval}
                            />
                        )}
                    </div>

                    <div className="colcustom-9 text-right flex gap-2 justify-end">
                        <button
                            onClick={() => downloadHandler()}
                            className="h-[33px] text-[16px] shrink-0 cursor-pointer px-3 rounded-md bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition-all duration-200 flex items-center justify-center"
                            disabled={userStatus.loading}
                        >
                            {userStatus.loading ? <ClipLoader size={16} /> : <FiDownload />}
                        </button>

                        <button
                            onClick={() => fetchDataHandler()}
                            className="h-[33px] text-[14px] shrink-0 cursor-pointer px-4 rounded-md bg-[var(--submit-button-bg)] hover:bg-[var(--submit-button-hover-bg)] text-[#111111] font-medium transition-all duration-200 flex items-center justify-center"
                            disabled={userStatus.loading}
                        >
                            {userStatus.loading || isChartLoading ? (
                                <ClipLoader size={16} />
                            ) : (
                                "Go"
                            )}
                        </button>
                    </div>

                </div>

                {/* <small className="text-black-50">* fields are mandatory to fill</small> */}

                {filterData.filterError && <Alert errMsg={filterData.filterError} />}
            </div>
        </>
    );

};

export const getFormattedData = async (data, responseData) => {
    try {
        const uniqueTimestamps = [...new Set(responseData.map(item => item.timestamp))].sort((a, b) => new Date(a) - new Date(b));
        let timeValueArr = []

        for (const tag of data) {
            let obj = {
                name: tag.TagName,
                "showInLegend": true,
                "zIndex": 1
            }
            const filteredData = responseData.filter(item => item.tagUID == tag.TagUID)
                .map(item => {
                    let arr = [
                        item.timestamp,
                        item.averageValue == "NaN" ? null : item.averageValue
                    ]
                    return arr

                });
            obj.data = filteredData
            timeValueArr.push(obj)
        }
        let finalOutput = {
            seriesData: timeValueArr,
            uniqueDataDateTime: uniqueTimestamps,
            minMax: []
        }
        return finalOutput
    } catch (error) {
        console.log('----errorr----', error)
    }
}