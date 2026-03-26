import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill1FeedGujaratL2Nodes,
  CementMill1FeedGujaratL2NodesType,
} from "../../../../../reactflow";
import "./CementMill1FeedGujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CementMill1FeedGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill1FeedGujaratL2Nodes}
        nodeType={CementMill1FeedGujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill",
          section: "Cement Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 1
              Tags: [
                "Z1J01B",
                "Z1A03",
                "Z1A03_GRINDING_SP",
                "U2U06",
                "U2U07",
                "Z4J06",
                "Z1A01B_GRINDING_SP",
              ],
            },
            {
              Section: "Cement Mill-2", //line 2
              Tags: ["U2U07", "Z4J06", "L5SF1_F1", "L5SF1_Z1AI"],
            },
            {
              Section: "Cement Mill", //line 2
              Tags: ["Z1L02_L3", "Z1L03_L4", "Z1L07_L2"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
