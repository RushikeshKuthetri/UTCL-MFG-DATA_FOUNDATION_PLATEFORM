import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill3GujratL2Nodes,
  CementMill3GujratL2NodesType,
} from "../../../../../reactflow";
import "./CementMill3GujratL2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CementMill3GujratL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill3GujratL2Nodes}
        nodeType={CementMill3GujratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill-2",
          section: "Cement Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill-3", //line 2
              Tags: ["Z3_U01", "Z3G01_S1", "L6SFF1_F1"],
            },
            {
              Section: "Cement Mill", //line 1
              Tags: ["CM_DEDUST_PR"],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["U2U04_F1", "U6U02_F1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
