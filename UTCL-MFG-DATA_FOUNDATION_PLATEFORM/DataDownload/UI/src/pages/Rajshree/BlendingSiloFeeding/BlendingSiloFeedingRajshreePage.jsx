import "./BlendingSiloFeedingRajshreePage.scss";
import { ReactFlowProvider } from "reactflow";
import {
  blendingSiloFeedingRajshreeNodes,
  blendingSiloFeedingRajshreeNodesType,
} from "../../../reactflow";
import { ReactFlowRenderer } from "../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const BlendingSiloFeedingRajshreePage = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={blendingSiloFeedingRajshreeNodes}
        nodeType={blendingSiloFeedingRajshreeNodesType}
        plantDetails={{
          plantCode: "RC",
          plantName: "rajashree",
          sectionName: "PreHeater",
          section: "",
          line: "4",
          extraTagDetails: [
            {
              Section: "Raw Mill",
              Tags: [
                "RM1_364CN1_DPTP",
                "RM1_364CN2_DPTP",
                "RM1_364CN3_DPTP",
                "RM1_364CN4_DPTP",
              ],
            },
            {
              Section: "Raw Mill-2",
              Tags: [
                "RM2_364CN5_DPTP",
                "RM2_364CN6_DPTP",
                "RM2_364CN7_DPTP",
                "RM2_364CN8_DPTP",
              ],
            },
            {
              Section: "Raw Mill-3",
              Tags: [
                "RM3_364CN9_DPTP",
                "RM3_364CNA_DPTP",
                "RM3_364CNB_DPTP",
                "RM3_364CNC_DPTP",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
