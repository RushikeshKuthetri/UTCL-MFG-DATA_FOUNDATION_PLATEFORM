import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { openGrafana, openTrends, openTrendsOnMobile, trendChartApi } from "../../../utils";
import { trendChartPlotlyApi } from "../../../utils/apicalls/plotlyapi";

export const MotorCircleDigitalTag = ({ className, label, text, style }) => {
  const dispatch = useDispatch();
  const { authProvider, filterData } = useSelector((state) => state);
  const startDate = moment(new Date()).format("YYYY-MM-DDTHH:mm");
  var watingClick = null; // a reference to timeout function
  var lastClick = 0;
  return (
    <div
      className={className}
      style={style}
      onDoubleClick={() => {
        // trendChartApi(label, dispatch, filterData, startDate, authProvider)
        trendChartPlotlyApi(label, dispatch, filterData, startDate, authProvider)
        // openTrends(label, dispatch, filterData, startDate, authProvider);
        // openGrafana(label, filterData.plant[0], authProvider);
      }}
      onTouchStart={(e) =>
        openTrendsOnMobile(
          e,
          lastClick,
          watingClick,
          label,
          dispatch,
          filterData,
          authProvider,
          startDate
        )
        // openGrafana(label, filterData.plant[0], authProvider)
      }
    >
      {text}
    </div>
  );
};
