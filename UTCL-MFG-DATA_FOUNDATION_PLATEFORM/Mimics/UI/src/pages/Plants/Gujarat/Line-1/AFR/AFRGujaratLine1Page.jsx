import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  afrGujaratL1Nodes,
  afrGujaratL1NodesType,
} from "../../../../../reactflow";
import "./AFRGujaratLine1Page.scss";

import { ReactFlowProvider } from "reactflow";

export const AFRGujaratLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={afrGujaratL1Nodes}
        nodeType={afrGujaratL1NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Calciner",
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Coal Mill", //line 1
              Tags: [
                "CON_SDR_RUN_TDY",
                "CON_SDR_RUN_YDAY",
                "DB_FLW_YD",
                "DB_TODAY",
                "F3J01_I1",
                "F3J01_S1",
                "KM2_F2J03A_MRUN2_TODAY",
                "PLNT_SHDR_RUN_TDY",
                "PLNT_SHDR_RUN_YDAY",
                "W1J01_I1",
                "W1J01_S1",
                "W1J01_YESTERDAY",
                "WF_TPH_PH1_TODAY",
                "WF_TPH_PH1_YD",
                "WF_TPH_PH2_TODAY",
                "WF_TPH_PH2_YD",
                "WFJ01_I1",
                "WFJ01_S1",
              ],
            },
            {
              Section: "Kiln", //line 1
              Tags: ["W1J01_P1", "W1J01_TE"],
            },
            {
              Section: "Packing Plant", //line 1
              Tags: ["SHREDDER1_RUN_TODAY", "SHREDDER1_RUN_YESTERDAY"],
            },
            {
              Section: "PreHeater", //line 1
              Tags: [
                "AFR_LIQUID_CL",
                "AFR_LIQUID_S",
                "AFR_SOLID_CL",
                "AFR_SOLID_S",
              ],
            },{
              Section: "Raw Mill", //line 1
              Tags: [
                "SWT01"
              ],
            },
            {
              Section: "Coal Mill", //line 2
              Tags: [
                "F2J01A",
                "F2J01B",
                "F2J01",
                "F2J02",
                "F2J03",
                "F2J03A",
                "F2J04",
                "F2J05",        
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
