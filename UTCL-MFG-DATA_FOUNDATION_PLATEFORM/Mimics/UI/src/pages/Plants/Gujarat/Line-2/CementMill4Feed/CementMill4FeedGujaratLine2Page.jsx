import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  CementMill4FeedGujaratL2Nodes,
  CementMill4FeedGujaratL2NodesType,
} from "../../../../../reactflow";
import "./CementMill4FeedGujaratLine2Page.scss";
import { ReactFlowProvider } from "reactflow";

export const CementMill4FeedGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CementMill4FeedGujaratL2Nodes}
        nodeType={CementMill4FeedGujaratL2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill-3",
          section: "Cement Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill-2", //line 2
              Tags: [
                "Z4A01A_F1_FREQ",
                "Z4A01B_F1_FREQ",
                "Z4A02_F1_FREQ",
                "Z4A03_F1_FREQ",
                "L6SF2_ADD_SP",
                "L6SFF2_F1_FREQ",
                "U2U07",
                "Z4J06",
                "U8U08",
                "Z4A01A",
                "Z4A01B",
                "Z4A02",
                "Z4A03",
                "Z4J01A",
                "Z4A01B_SC2",
                "Z4J01B",
                "Z4A01B_SC1",
                "Z4P95_SPM",
                "Z4P95_SPEED",
                "Z4P95_CURRENT",
                "L6SF2_STEP_SP",
                "Z4P50_S1SP",
                "Z4P50_S1",
                "Z4A01B_SC3",          
              ],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["U2U07", "Z4J06", "U8U06"
                ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
