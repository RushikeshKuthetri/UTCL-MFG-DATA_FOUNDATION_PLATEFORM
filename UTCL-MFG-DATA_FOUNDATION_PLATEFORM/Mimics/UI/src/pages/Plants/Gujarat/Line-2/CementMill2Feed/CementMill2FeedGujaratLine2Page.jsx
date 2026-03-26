import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill2FeedGujaratL2Nodes,
  CementMill2FeedGujaratL2NodesType,
} from "../../../../../reactflow";
import "./CementMill2FeedGujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CementMill2FeedGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill2FeedGujaratL2Nodes}
        nodeType={CementMill2FeedGujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill-2",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 2
              Tags: ["Z2L02_L3", "Z2L03_L4", "Z2L07_L2"],
            },
            {
              Section: "Cement Mill-2", //line 2
              Tags: ["U2U07", "L5SF2_F1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
