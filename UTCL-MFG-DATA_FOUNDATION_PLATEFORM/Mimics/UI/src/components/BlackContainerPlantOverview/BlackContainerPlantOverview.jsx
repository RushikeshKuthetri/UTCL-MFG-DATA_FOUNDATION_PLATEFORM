import { useDispatch, useSelector } from "react-redux";
import { trendChartApi, useValue } from "../../utils";
import { useBalajiPopupsStatus } from "../../utils/customhooks/useBalajiPopupsStatus";
import { useState } from "react";
import moment from "moment";
import { trendChartPlotlyApi } from "../../utils/apicalls/plotlyapi";

export const BlackContainerPlantOverview = ({ data }) => {
    const value = useValue(data.label);
    const [errorColor, setErrorColor] = useState("green");
    const dispatch = useDispatch();
    const { authProvider, filterData } = useSelector((state) => state);
    useBalajiPopupsStatus(value, data, setErrorColor);

    const startDate = moment(new Date()).format("YYYY-MM-DDTHH:mm");

    // Detect RUN STATUS row
    const isRunStatus =
        data.label.endsWith("_RUN") || data.label.endsWith("_FB");

    // Build display element
    let displayElement;

    if (isRunStatus) {
        const numericValue = Number(value);
        const isRunning = numericValue >= 1;

        displayElement = (
            <div
                style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: isRunning ? "#00ff00" : "#ff0000",
                }}
            ></div>
        );
    } else {
        displayElement = (
            <>
                <span>{value}</span>
                {data.unit && <span className={data.unitColor}> {data.unit}</span>}
            </>
        );
    }

    return (
        <div
            className={data.useClass}
            style={{ color: `${errorColor}` }}
            title={data.label}
            onDoubleClick={() =>
                // trendChartApi(
                //     data.label,
                //     dispatch,
                //     filterData,
                //     startDate,
                //     authProvider
                // )
                trendChartPlotlyApi(data.label, dispatch, filterData, startDate, authProvider) // Added as part of Plotly Chart developement
            }
        >
            {displayElement}
        </div>
    );
};
