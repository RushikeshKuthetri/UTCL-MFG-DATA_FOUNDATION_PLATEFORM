import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  MechTransferGujaratLine2Nodes,
  MechTransferGujaratLine2NodesType,
} from "../../../../../reactflow";
import "./MechTransferGujaratLine2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const MechTransferGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={MechTransferGujaratLine2Nodes}
        nodeType={MechTransferGujaratLine2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill-2",
          section: "Mech Transfer",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill-3", //line 2
              Tags: ["Z1J02"],
            },
            {
              Section: "Cement Mill", //line 1
              Tags: [
                "Z2L04_L3",
                "Z2L05_L2",
                "Z2L06_L2",
                "Z1J02_J1",
                "Z1J02",
                "Z1U15M1",
                "Z1U15M1S",
                "Z1U15M2",
                "Z2U11",
                "Z2U15M2",                
              ],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["Z1L04_L2", "Z2J02_I1"],
            },
            {
              Section: "Packing Plant", //line 1
              Tags: [
                "Z1L04_L2",
                "Z1L05_L2",
                "Z1L03_L2",
                "Z1L04_L2",
                "Z1L05_L2",
                "Z1L03_L2",
                "Z2L04_L3",
                "Z2L05_L2",
                "Z2L06_L2",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
