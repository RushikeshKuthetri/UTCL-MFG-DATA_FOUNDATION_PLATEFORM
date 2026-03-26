import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  StackDataRawanLine1Nodes,
  StackDataRawanLine1NodesType,
} from "../../../../../reactflow";
import "./StackDataRawanLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const StackDataRawanLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={StackDataRawanLine1Nodes}
        nodeType={StackDataRawanLine1NodesType}
        plantDetails={{
          plantCode: "RWCW",
          plantName: "Rawan",
          sectionName: "Raw Mill",
          section: "Raw Mill",
          line: "1",
          extraTagDetails: [
            {
              Section: "PreHeater",
              Tags: [
                "47BF1PT2/MODULE-1_DP",
                "47BF1PT3/MODULE-2_DP",
                "47BF1PT4/MODULE-3_DP",
                "47FN1II/CURRENT",
                "47BF1PT1/DP",
                "44DA3ZT1/POS",
                "44PH1TED/TEMP",
                "44DA1ZT1/POS",
              ],
            },
            {
              Section: "Cooler",
              Tags: ["42SK1XA1/STACK", "47EP1_PT1/DRAFT1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
