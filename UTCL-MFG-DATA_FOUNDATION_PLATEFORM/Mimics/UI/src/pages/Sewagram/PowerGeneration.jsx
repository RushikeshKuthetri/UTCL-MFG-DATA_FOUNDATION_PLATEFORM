import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getLiveDataStatusCondition,
    trendChartApi,
    useLatestDataNew,
    useSectionTagDetails,
    useSocketConnection,
    useValue,
} from "../../utils";
import { useLiveDataAvailableNew } from "../../utils/customhooks/useLiveDataAvailable";
import { useGetAdditionalTagDetail } from "../../utils/customhooks/getAdditionalTagDetails";
import moment from "moment";
import sewagram_img_1 from "../../img/sewagram_img_1.png";
import sewagram_img_2 from "../../img/sewagram_img_2.png";
import sewagram_img_3 from "../../img/sewagram_img_3.png";
import sewagram_img_4 from "../../img/sewagram_img_4.png";
import { trendChartPlotlyApi } from "../../utils/apicalls/plotlyapi";
import { Alert } from "react-bootstrap";

/* ---------------- BLACK CONTAINER ---------------- */
const BlackContainerPlantOverview = ({ data }) => {
    const value = useValue(data.label);
    const dispatch = useDispatch();
    const { authProvider, filterData } = useSelector((state) => state);

    const startDate = moment().format("YYYY-MM-DDTHH:mm");
    const numericValue = Number(value);
    const isRunning = !isNaN(numericValue) && numericValue >= 1;
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
            }}
            title={data.label}
            onDoubleClick={() =>
                // trendChartApi(
                //     data.label,
                //     dispatch,
                //     filterData,
                //     startDate,
                //     authProvider
                // )
                trendChartPlotlyApi(
                    data.label,
                    dispatch,
                    filterData,
                    startDate,
                    authProvider
                )
            }
        >
            <div
                className="fw-bolder"
                style={{
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: isRunning ? "#00ff00" : "#ff0000",
                    border: "1px solid #000",
                    fontSize: "0.75rem",
                }}
            >
                {isRunning ? "1" : "0"}
            </div>
        </div>
    );
};
/* ---------------- UI HELPERS ---------------- */
const PowerRow = ({ name, label, imgSrc }) => {
    const value = useValue(label);
    console.log(`Value for ${label} in PowerRow:`, value);
    const dispatch = useDispatch();
    const { authProvider, filterData } = useSelector((state) => state);
    const startDate = moment().format("YYYY-MM-DDTHH:mm");
    const numericValue = Number(value);
    const formattedValue =
        !value || isNaN(numericValue)
            ? "0 MW"
            : `${numericValue.toFixed(2)} MW`;
    return (
        <div className="row align-items-center mb-4">

            {/* TAG NAME */}
            <div className="col-5 fw-bolder display-6">
                {name}
            </div>

            {/* IMAGE (CENTER) */}
            <div className="col-2 d-flex justify-content-center align-items-center">
                <img
                    src={imgSrc}
                    alt={label}
                    style={{
                        width: "115px",
                        height: "50px",
                        objectFit: "contain",
                    }}
                />
            </div>

            {/* VALUE */}
            <div className="col-5 d-flex justify-content-end">
                <div
                    className="bg-warning fw-bolder border border-dark d-flex align-items-center justify-content-center"
                    style={{
                        minWidth: "90px",
                        height: "45px",
                        fontSize: "1.5rem",
                        padding: "0 12px",
                        cursor: "pointer",
                    }}
                    title={label}
                    onDoubleClick={() =>
                        // trendChartApi(
                        //     label,
                        //     dispatch,
                        //     filterData,
                        //     startDate,
                        //     authProvider
                        // )
                        trendChartPlotlyApi(
                            label,
                            dispatch,
                            filterData,
                            startDate,
                            authProvider
                        )
                    }
                >
                    {formattedValue}
                </div>
            </div>

        </div>
    );
};

/* ---------------- CONFIG ---------------- */
const plantDetails = {
    plantCode: "SCW",
    plantName: "Sewagram",
    sectionName: null,
    line: null,
};

const tags = [
    "SEW_TPP_TG1_POWER",
    "SEW_TPP_TG2_POWER",
    "SEW_OLD_SOLAR_POWER",
    "SEW_RE_TOTAL_POWER",
    "SEW_TOTAL_POWER",

    "361MD1",
    "L41MD1",
    "461MD1",
    "561MD1",
    "563MD1",

    "362MD1",
    "L42MD1",
    "462MD1",
    "562MD1",
];

const EQUIPMENT_MAP = {
    LINE_1: [
        { tag: "361MD1", label: "RM-1" },
        { tag: "L41MD1", label: "CLM-1" },
        { tag: "461MD1", label: "K-1" },
        { tag: "561MD1", label: "CM-1" },
        { tag: "563MD1", label: "CM-2" },
    ],
    LINE_2: [
        { tag: "362MD1", label: "RM-2" },
        { tag: "L42MD1", label: "CLM-2" },
        { tag: "462MD1", label: "K-2" },
        { tag: "562MD1", label: "CM-3" },
    ],
};

/* ---------------- MAIN COMPONENT ---------------- */
export const PowerGeneration = () => {
    const { plantCode, plantName, sectionName, section, line } = plantDetails;
    console.log("Plant details in PowerGeneration.jsx", plantDetails);
    const { authProvider } = useSelector((state) => state);
    const extraTagDetails =
        plantDetails &&
            plantDetails.extraTagDetails &&
            plantDetails.extraTagDetails.length
            ? plantDetails.extraTagDetails
            : [];
    useSectionTagDetails(plantCode, line, sectionName);
    useGetAdditionalTagDetail(plantCode, extraTagDetails);
    const tagNames = authProvider?.plantBasedTagnames;
    const additionalTagNames = authProvider?.extraTagDetails;

    let finalTagNames = [];

    if (tagNames && tagNames.length) {
        finalTagNames = [...finalTagNames, ...tagNames];
    }

    if (additionalTagNames && additionalTagNames.length) {
        finalTagNames = [...finalTagNames, ...additionalTagNames];
    }
    useLiveDataAvailableNew(plantCode, finalTagNames, sectionName);

    const liveDataStatusCondition = getLiveDataStatusCondition(plantCode);

    // useLatestDataNew(plantCode, plantName, sectionName, section, finalTagNames);
    useSocketConnection(finalTagNames, liveDataStatusCondition);


    return (
        <div className="container-fluid bg-secondary bg-opacity-25 min-vh-100 d-flex justify-content-center align-items-center">
            {!liveDataStatusCondition && (
                <div className="position-absolute mimic-alert">
                    <Alert errMsg="Live data is not coming. Please contact to your admin." />
                </div>
            )}
            <div className="border border-dark border-4 w-75 bg-secondary bg-opacity-50">
                <div className="bg-warning fw-bold text-center py-2 border-bottom border-dark border-4">
                    ULTRATECH CEMENT LTD SEWAGRAM CEMENT WORKS
                </div>
                <div className="p-4 d-flex justify-content-center">
                    <div className="w-75">
                        <PowerRow
                            name="TPP TG-1"
                            label="FCS0105!TG1MW001.PV"
                            // value={getValue("FCS0105!TG1MW001.PV")}
                            imgSrc={sewagram_img_1}
                        />
                        <PowerRow
                            name="TPP TG-2"
                            label="FCS0108!TG2MW001.PV"
                            // value={getValue("FCS0108!TG2MW001.PV")}
                            imgSrc={sewagram_img_2}
                        />

                        <PowerRow
                            name="OLD SOLAR"
                            label="FCS0105!SOLARPWR.PV"
                            // value={getValue("FCS0105!SOLARPWR.PV")}
                            imgSrc={sewagram_img_3}
                        />

                        <PowerRow
                            name="RE TOTAL"
                            label="FCS0105!RE01TOT.PV"
                            // value={getValue("FCS0105!RE01TOT.PV")}
                            imgSrc={sewagram_img_4}
                        />
                        <PowerRow
                            name="TOTAL PWR"
                            label="TOTAL_POWER_GENERATION"
                            // value={getValue("TOTAL_POWER_GENERATION")}
                            imgSrc=""
                        />

                    </div>
                </div>
                <div className="border-top border-dark border-4 p-4 d-flex justify-content-between">
                    {/* ---------------- LINE-1 ---------------- */}
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <strong className="fs-4 fw-bolder text-dark me-3">
                            LINE-1
                        </strong>

                        {EQUIPMENT_MAP.LINE_1.map((eq) => (
                            <div
                                key={eq.tag}
                                className="d-flex flex-column align-items-center"
                                style={{ minWidth: "55px" }}>
                                <BlackContainerPlantOverview
                                    data={{ label: eq.tag }} />
                                <h1
                                    className="fw-bolder text-dark mt-2"
                                    style={{ fontSize: "1rem" }}
                                >
                                    {eq.label}
                                </h1>
                            </div>
                        ))}
                    </div>

                    {/* ---------------- LINE-2 ---------------- */}
                    <div className="d-flex align-items-center justify-content-center gap-5">
                        <strong className="fs-4 fw-bolder text-dark me-3">
                            LINE-2
                        </strong>

                        {EQUIPMENT_MAP.LINE_2.map((eq) => (
                            <div
                                key={eq.tag}
                                className="d-flex flex-column align-items-center"
                                style={{ minWidth: "55px" }}
                            >
                                <BlackContainerPlantOverview
                                    data={{ label: eq.tag }}
                                />
                                <small
                                    className="fw-bolder text-dark mt-2"
                                    style={{ fontSize: "1rem" }}
                                >
                                    {eq.label}
                                </small>
                            </div>
                        ))}
                    </div>

                </div>


            </div>
        </div>
    );
};





export default PowerGeneration;
