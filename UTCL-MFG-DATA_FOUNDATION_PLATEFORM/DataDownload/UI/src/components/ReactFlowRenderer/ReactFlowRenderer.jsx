import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import "reactflow/dist/style.css";
import { useSelector } from "react-redux";
import ReactFlow, { Controls, useReactFlow } from "reactflow";
import { Alert } from "../Alert/Alert";
import {
  accesslogshistory,
  getLiveDataStatusCondition,
  // useLatestData,
  useLatestDataNew,
  useSectionTagDetails,
  useSocketConnection,
} from "../../utils";
import "./ReactFlowRenderer.scss";
import { useLiveDataAvailableNew } from "../../utils/customhooks/useLiveDataAvailable";
import { useGetAdditionalTagDetail } from "../../utils/customhooks/getAdditionalTagDetails";

export const ReactFlowRenderer = ({
  nodeType,
  node,
  plantDetails,
  tableClass,
  vikramplant,
}) => {
  const reactFlowInstance = useReactFlow();
  const { plantCode, plantName, sectionName, section, line } = plantDetails;

  const extraTagDetails =
    plantDetails &&
    plantDetails.extraTagDetails &&
    plantDetails.extraTagDetails.length
      ? plantDetails.extraTagDetails
      : [];
  useSectionTagDetails(plantCode, line, sectionName);

  useGetAdditionalTagDetail(plantCode, extraTagDetails);
  const { authProvider } = useSelector((state) => state);
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
  // useLatestData(plantCode, plantName, sectionName, section);
  const liveDataStatusCondition = getLiveDataStatusCondition(plantCode);
  // if (liveDataStatusCondition) {
  useLatestDataNew(plantCode, plantName, sectionName, section, finalTagNames);
  useSocketConnection(finalTagNames, liveDataStatusCondition);
  // }

  useEffect(() => {
    console.log(
      "localStorage.getItem(trendIntervalID) ReactFlowRenderer --",
      localStorage.getItem("trendIntervalID")
    );
    if (localStorage.getItem("trendIntervalID")) {
      clearInterval(localStorage.getItem("trendIntervalID"));
    }
    accesslogshistory({ plant: plantCode, section: sectionName });
  }, []);

  const vikramPlantCondition = vikramplant || tableClass;

  return (
    <div className="bg1">
      <div
        className={
          vikramPlantCondition ? "row UHDashboardVikram" : "row mainContainer"
        }
      >
        {!liveDataStatusCondition && (
          <div className="position-absolute mimic-alert">
            <Alert errMsg="Live data is not coming. Please contact to your admin." />
          </div>
        )}
        <ReactFlow
          className="transition"
          nodes={node}
          nodeTypes={nodeType}
          minZoom={0.5}
          maxZoom={3}
          zoomOnDoubleClick={false}
          panOnScroll={false}
          defaultViewport={{
            x: window.innerWidth / 4.5,
            y: window.innerHeight / 3.76,
            zoom: isMobile ? (vikramPlantCondition ? 1 : 0.3) : 1,
          }}
          zoomOnScroll={false}
          nodesDraggable={true}
          zoomOnPinch={false}
        >
          <Controls
            showInteractive={false}
            onFitView={() =>
              reactFlowInstance.setViewport({
                x: window.innerWidth / 4.5,
                y: window.innerHeight / 3.76,
                zoom: isMobile ? 0.3 : 1,
              })
            }
            style={{ position: "fixed", bottom: "10px", zIndex: "10" }}
          />
        </ReactFlow>
      </div>
    </div>
  );
};
