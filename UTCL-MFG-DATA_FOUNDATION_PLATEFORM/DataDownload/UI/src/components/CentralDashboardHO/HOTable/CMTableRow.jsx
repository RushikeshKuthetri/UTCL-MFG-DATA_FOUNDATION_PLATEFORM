import { useDispatch, useSelector } from "react-redux";
import {
  findCMShutdownStatus,
  openTrends,
  openTrendsOnMobile,
  trendChartApi,
} from "../../../utils";
import moment from "moment";
import { useEffect } from "react";
import {
  useCMCentralisedDashboardValues,
  useHOTableValue,
} from "../../../utils/customhooks/centraliseddashboard/dashboardtablefunctions/getCentralisedDasboardValues";

export const CMTableRow = ({ tagname, plant, taguid }) => {
  const dispatch = useDispatch();
  const { authProvider, filterData, centralisedDashboardData } = useSelector(
    (state) => state
  );
  var watingClick = null; // a reference to timeout function
  var lastClick = 0;
  const startDate = moment(new Date()).format("YYYY-MM-DDTHH:mm");
  var cmShutdownDays = findCMShutdownStatus(taguid, centralisedDashboardData);
  const cmClassname = useCMCentralisedDashboardValues(tagname, plant, cmShutdownDays);
  const analogValue = useHOTableValue(tagname, plant);
  useEffect(() => {
    if (cmClassname === "green-color") {
      dispatch({
        type: "CM_RUNNING_COUNT",
        payload: {
          tagname,
          plant,
          color: { green: true, grey: false, red: false },
        },
      });
    } else if (cmClassname === "red-color") {
      dispatch({
        type: "CM_RUNNING_COUNT",
        payload: {
          tagname,
          plant,
          color: { green: false, grey: false, red: true },
        },
      });
    } else {
      dispatch({
        type: "CM_RUNNING_COUNT",
        payload: {
          tagname,
          plant,
          color: { green: false, grey: true, red: false },
        },
      });
    }
  }, [cmClassname, plant, tagname, dispatch]);
  return (
    <div className="d-flex align-items-center">
      <div
        className={`dot p-2 digital-tag ${cmClassname}`}
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
      <span className="text-dark ml-2">{cmClassname !== "grey-color" ? Math.round(analogValue) : 0} / </span>
      <span className="text-dark ml-1">
        {cmShutdownDays?.day_diff ? cmShutdownDays.day_diff : 0}
      </span>
    </div>
  );
};
