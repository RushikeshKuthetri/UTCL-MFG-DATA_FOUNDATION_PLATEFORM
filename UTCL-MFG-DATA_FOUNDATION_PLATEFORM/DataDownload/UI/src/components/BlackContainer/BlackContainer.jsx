import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openTrends, openTrendsOnMobile, useValue, trendChartApi } from "../../utils";
// import { openGrafana, openTrends, openTrendsOnMobile, useValue } from "../../utils";
import { useBalajiPopupsStatus } from "../../utils/customhooks/useBalajiPopupsStatus";
import moment from "moment";
 
export const BlackContainer = ({ data }) => {
  const value = useValue(data.label);
  const [errorColor, setErrorColor] = useState("green");
  const dispatch = useDispatch();
  const { authProvider, filterData } = useSelector((state) => state);
  useBalajiPopupsStatus(value, data, setErrorColor);
  var watingClick = null; // a reference to timeout function
  var lastClick = 0;
  const startDate = moment(new Date()).format("YYYY-MM-DDTHH:mm");
  //const tagNames = authProvider?.plantBasedTagnames;
  //let tagData;
  // console.log("Black cont tagNames -",tagNames)
  // console.log("Black cont data -",data)
  // if(tagNames.length) {
  //   tagData = tagNames.filter(item=>item.TagName == data.label).map(item => {
     
  //     return {
  //       "assetId": item.assetId,
  //         "propertyId": item.propertyId,
  //         "TagUID": item.TagUID,
  //         "description": item.description,
  //         "UnitOfMeasurement": item.UnitOfMeasurement,
  //         "TagName": item.TagName
  //     };
  //   });
  // }
  // console.log("tagData blsc --",tagData)
  return (
    <>
      <div
        className={data.useClass}
        style={{ color: `${errorColor}` }}
        title={data.label}
        onDoubleClick={() =>
          trendChartApi(data.label, dispatch, filterData, startDate, authProvider)
          // openTrends(data.label, dispatch, filterData, startDate, authProvider)
          // openGrafana(data.label, filterData.plant[0], authProvider)
        }
        onTouchStart={(e) =>
          openTrendsOnMobile(
            e,
            lastClick,
            watingClick,
            data.label,
            dispatch,
            filterData,
            authProvider,
            startDate
          )
          // openGrafana(data.label, filterData.plant[0], authProvider)
        }
        // onTouchStart={() =>
        //   // openTrendsOnMobile(
        //   //   e,
        //   //   lastClick,
        //   //   watingClick,
        //   //   data.label,
        //   //   dispatch,
        //   //   filterData,
        //   //   authProvider,
        //   //   startDate
        //   // )
        //   openGrafana(data.label, filterData.plant[0], authProvider)
        // }
      >
        <span>{value}</span>
        {data.unit && <span className={data.unitColor}> {data.unit}</span>}
      </div>
    </>
  );
};