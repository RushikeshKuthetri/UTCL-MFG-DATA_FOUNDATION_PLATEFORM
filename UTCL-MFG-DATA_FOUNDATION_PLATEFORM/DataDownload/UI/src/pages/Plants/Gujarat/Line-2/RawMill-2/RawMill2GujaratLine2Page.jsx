import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  RawMill2GujaratLine2Nodes,
  RawMill2GujaratLine2NodesType,
} from "../../../../../reactflow";
import "./RawMill2GujaratLine2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const RawMill2GujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2GujaratLine2Nodes}
        nodeType={RawMill2GujaratLine2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Raw Mill-2",
          section: "Raw Mill",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", //line 2
              Tags: ["H2U06M1_J1", "H2U06M2_J1", "J2P67_POS"],
            },
            {
              Section: "Raw Mill", //line 1
              Tags: [
                "R1M01_L4",
                "R1S19_S1A",
                "R1S19_P1_SP_SPM",
                "R1T03M2",
                "R1T02M2",
                "EMS_R1M03_KW",
                "R1J01_TAKEUP_GUARD",
                "R1J02_Z2",
                "R1J02_Z3",
                "R1J03",
                "R1J03_BSS",
                "R1J03_SAL1",
                "R1J03_SAL2",
                "R1J03_Z1",
                "R1J04",
                "R1J04_BSS",
                "R1J04_SAL1",
                "R1J04_SAL2",
                "R1J04_Z1",
                "R1J05",
                "R1J05_MG",
                "R1M03LRS_LVL",
                "R1M03LRS_ON",
                "R1M24",
                "R1U05",
                "RM_TOTAL_FEED_SP",
                "R1J04_I1",
                "R1M01_L1",
                "R1M01_L2",
                "R1U08_P1",
                "REC_PLC_ROOM_TEMP",
                "SAMPLE_TAKEN_COUNTER",
                "R1U08M1",
                
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
