import { useDispatch, useSelector } from "react-redux";
import { openTrends, openTrendsOnMobile, trendChartApi } from "../../../utils";
import moment from "moment";
import { trendChartPlotlyApi } from "../../../utils/apicalls/plotlyapi";

export const MimicCaret = ({
  parentClass,
  firstCaretClass,
  secondCaretClass,
  label,
}) => {
  const dispatch = useDispatch();
  const { authProvider, filterData } = useSelector((state) => state);
  const startDate = moment(new Date()).format("YYYY-MM-DDTHH:mm");
  var watingClick = null; // a reference to timeout function
  var lastClick = 0;

  return label ? (
    <div
      className={parentClass}
      onDoubleClick={() => {
        // trendChartApi(label, dispatch, filterData, startDate, authProvider)
        trendChartPlotlyApi(label, dispatch, filterData, startDate, authProvider)
        // openTrends(label, dispatch, filterData, startDate, authProvider);
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
      }
    >
      <i className={firstCaretClass}></i>
      <i className={secondCaretClass}></i>
    </div>
  ) : (
    <div className={parentClass}>
      <i className={firstCaretClass}></i>
      <i className={secondCaretClass}></i>
    </div>
  );
};
