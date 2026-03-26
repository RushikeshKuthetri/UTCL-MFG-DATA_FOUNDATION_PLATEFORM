import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { Alert } from "../../Alert/Alert";
import { HighchartsGraph, } from "./HighChart";
import { PlotlyGraph } from "./PlotlyChart";
import ChartNavbar from "../ChartNavbar/ChartNavbar";
import ChartLoader from "../../Loader/ChartLoader";
import { XYPlot } from "./XYPlot";
import { useEffect } from "react";
import { HistogramPlot } from "./Histogram";
import { BarChart } from "./BarChart";

export function Graph({ fetch }) {
  const { userStatus } = useSelector((state) => state);
  const plotlyProvider = useSelector((state) => state.plotlyProvider);
  const graphType = plotlyProvider.graphType;

  useEffect(() => {
    console.log("Graphtype is =======================================>", graphType)
  }, [graphType])
  return (
    <div className={`mb-4`}>
      {/* <a href="https://g-e7b0d942ec.grafana-workspace.ap-southeast-1.amazonaws.com/d/bebk2qlask2yod/demo-dashboard?orgId=1&refresh=5s&var-property=5e5ae26e-0bd3-4633-829c-eb048d183a90" target="_blank">click here</a> */}
      <ChartNavbar />
      {userStatus.error && <Alert errMsg={userStatus.error} />}
      {userStatus.loading ? <ChartLoader /> : ""}
      {/* {userStatus.loading ? <ClipLoader /> : ""} */}
      {/* {!userStatus.loading && !userStatus.error ? <HighchartsGraph /> : ""} */}
      {/* {!userStatus.loading && !userStatus.error ? <ChartNavbar /> : ""} */}
      {graphType === "trend" && !userStatus.loading && !userStatus.error ? <PlotlyGraph /> : ""}
      {graphType === "xy" && !userStatus.loading && !userStatus.error ? <XYPlot /> : ""}
      {graphType === "histogram" && !userStatus.loading && !userStatus.error ? <HistogramPlot /> : ""}
      {graphType === "bar" && !userStatus.loading && !userStatus.error ? <BarChart /> : ""}
    </div>
  );
}
