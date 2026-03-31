// 









/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  CentralTable,
  CentralTableLegend,
  MillRunningStatusTable,
  ScreenLoader,
} from "../../../components";
import {
  getCentralisedTableData,
  getLatestDataForCentralisedDashboardTable,
  // useSocketConnection,
  getKilnShutDownStatus,
  getCMShutDownStatus,
} from "../../../utils";
import "./MillRunningPage.scss";
import { getHoTagDetails } from "../../../utils/apicalls/centralisedDashboard";

export const MillRunningPage = () => {
  const { centralisedDashboardData } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [intervalId, setIntervalId] = useState(undefined);

  useEffect(() => {
    (async () => {
      dispatch({ type: "START_LOADER" });
      try {
        dispatch({ type: "HO_DASHBOARD_LOADING_TRUE" });
        const response = await getCentralisedTableData();
        dispatch({ type: "HO_DASHBOARD_LOADING_FALSE" });
        dispatch({
          type: "INSERT_CENTRALISED_TABLE_DATA",
          payload: response,
        });
        const latesDataResponse =
          await getLatestDataForCentralisedDashboardTable();
        dispatch({
          type: "SOCKET_DATA",
          payload: latesDataResponse,
        });

        const id = setInterval(async () => {
          const latesDataResponse =
            await getLatestDataForCentralisedDashboardTable();
          dispatch({
            type: "SOCKET_DATA",
            payload: latesDataResponse,
          });
        }, 60000); // 1 minutes in milliseconds

        setIntervalId(id)
      } catch (error) {
        console.error(error);
      }
      dispatch({ type: "STOP_LOADER" });
    })();
  }, [dispatch]);

  useEffect(() => {
    (async () => {
      dispatch({ type: "START_LOADER" });
      try {
        const kilnResponse = await getKilnShutDownStatus();
        dispatch({
          type: "KILN_SHUTDOWN_STATUS",
          payload: kilnResponse,
        });
        const cmResponse = await getCMShutDownStatus();
        dispatch({
          type: "CM_SHUTDOWN_STATUS",
          payload: cmResponse,
        });
        const hoTagDetail = await getHoTagDetails({})
        if (hoTagDetail?.length) {
          dispatch({
            type: "HO_TAGS_DETAILS",
            payload: {
              tagNames: hoTagDetail,
            },
          });
        }
      } catch (error) {
        console.error(error);
      }
      dispatch({ type: "STOP_LOADER" });
    })();
  }, []);

  useEffect(() => {
    return () => {
      dispatch({
        type: "HO_TAGS_DETAILS",
        payload: {
          tagNames: [],
        },
      });
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [])
  // console.log(centralisedDashboardData.centralisedDashboardPlants)
  // useSocketConnection(centralisedDashboardData.centralisedDashboardPlants);
  return (
    <section className=" px-2 overflow-x-scroll">
      {centralisedDashboardData.loader ? (
        <ScreenLoader />
      ) : (
        <div className="h-100">
          <div className="row mt-1">
            <MillRunningStatusTable
              section="Kiln"
              data={centralisedDashboardData.kiln}
            />
            <MillRunningStatusTable
              section={"Cement Mills"}
              data={centralisedDashboardData.cementmill}
            />
          </div>

          <div className="">
            <CentralTable />
          </div>
          <CentralTableLegend />
        </div>
      )}
    </section>
  );
};
