import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill3FeedGujaratL2Nodes,
  CementMill3FeedGujaratL2NodesType,
} from "../../../../../reactflow";
import "./CementMill3FeedGujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CementMill3FeedGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill3FeedGujaratL2Nodes}
        nodeType={CementMill3FeedGujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill-2",
          section: "Cement Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill-3", //line 2
              Tags: [
                "Z3L02_L4_TON",
                "Z3L01_L4_TON",
                "L6SFF1_POS",
                "Z3G01_S1",
                "L6SFF1_F1",
              ],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["U2U07"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
