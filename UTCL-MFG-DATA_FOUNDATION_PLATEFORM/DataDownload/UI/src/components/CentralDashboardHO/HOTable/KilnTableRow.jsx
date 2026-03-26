import { useDispatch, useSelector } from "react-redux";
import {
  findKilnShutdownStatus,
  openTrends,
  openTrendsOnMobile,
  trendChartApi,
  useKilnCentralisedDashboardValues,
} from "../../../utils";
import moment from "moment";
import { useEffect } from "react";
import { useHOTableValue } from "../../../utils/customhooks/centraliseddashboard/dashboardtablefunctions/getCentralisedDasboardValues";

export const KilnTableRow = ({ tagname, plant, taguid }) => {
  const dispatch = useDispatch();
  const { authProvider, filterData, centralisedDashboardData } = useSelector(
    (state) => state
  );
  var watingClick = null; // a reference to timeout function
  var lastClick = 0;
  const startDate = moment(new Date()).format("YYYY-MM-DDTHH:mm");
  var kilnShutdownDays = findKilnShutdownStatus(
    taguid,
    centralisedDashboardData
  );
  const kilnClassname = useKilnCentralisedDashboardValues(tagname, plant, kilnShutdownDays);
  useEffect(() => {
    if (kilnClassname === "green-color") {
      dispatch({
        type: "KILN_RUNNING_COUNT",
        payload: {
          tagname,
          plant,
          color: { green: true, grey: false, red: false },
        },
      });
    } else if (kilnClassname === "red-color") {
      dispatch({
        type: "KILN_RUNNING_COUNT",
        payload: {
          tagname,
          plant,
          color: { green: false, grey: false, red: true },
        },
      });
    } else {
      dispatch({
        type: "KILN_RUNNING_COUNT",
        payload: {
          tagname,
          plant,
          color: { green: false, grey: true, red: false },
        },
      });
    }
  }, [kilnClassname, plant, tagname, dispatch]);
  const analogValue = useHOTableValue(tagname, plant);

  return (
    <div className="d-flex align-items-center">
      <div
        className={`dot p-2 digital-tag ${kilnClassname}`}
        onClick={() => {
          dispatch({ type: "ADD_PLANT", payload: [`${plant}`] });
        }}
        onDoubleClick={() => {
          trendChartApi(tagname, dispatch, filterData, startDate, authProvider, [], true)
          // openTrends(tagname, dispatch, filterData, startDate, authProvider);
        }}
        onTouchStart={(e) =>
          openTrendsOnMobile(
            e,
            lastClick,
            watingClick,
            tagname,
            dispatch,
            filterData,
            authProvider,
            startDate
          )
        }
        title={tagname}
      ></div>
      <span className="text-dark ml-2">{kilnClassname !== "grey-color" ? Math.round(analogValue) : 0} / </span>
      <span className="text-dark ml-1">
        {kilnShutdownDays?.day_diff ? kilnShutdownDays.day_diff : 0}
      </span>
    </div>
  );
};
