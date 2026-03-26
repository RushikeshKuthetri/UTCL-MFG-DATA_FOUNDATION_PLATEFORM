import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";
import {
  ClinkerTransportGujaratLine2Nodes,
  ClinkerTransportGujaratLine2NodesType,
} from "../../../../../reactflow";
import "./ClinkerTransportGujaratLine2Page.scss";

import { ReactFlowProvider } from "reactflow";

export const ClinkerTransportGujaratLine2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransportGujaratLine2Nodes}
        nodeType={ClinkerTransportGujaratLine2NodesType}
        plantDetails={{
          plantCode: "GCW",
          plantName: "Gujarat",
          sectionName: "Cement Mill-3",
          section: "Cement Mill-3",
          line: "2",
          extraTagDetails: [
            {
              Section: "Cement Mill", //line 2
              Tags: ["L7SI_L2_TON"],
            },
            {
              Section: "Cement Mill-2", //line 2
              Tags: [
                "L7BE1M1_I1",
                "L5A02_W1",
                "L5A03_W1",
                "L5J01M1_I1",
                "U6U05_I1",
                "U6U05_S1",
                "U6U05_S1_SP",
                "U8P20_DP",
                "U8P30_DP",
                "U8P65_DP",
                "U8P75_DP",
                "U8P85_DP",
                "X1J02_I1",
                "X1J02_S1",
                "X1J02_S1_SP",
                "X1J03_I1",
                "X1J03_S1",
                "X1J03_S1_SP",
                "U6U03_I1",
                "U6U04_I1",
                "U6U04_S1",
                "U6U04_S1_SP_SPM",
                "Z3L01_L4",
                "L7SI_L2_LI",
              ],
            },
            {
              Section: "Cooler", //line 2
              Tags: [
                "CLINKER SILO",
                "U4U01_I1",
                "U4U02_I1",
                "U4U03_I1",
                "U4U04_I1",
              ],
            },
            {
              Section: "General", //line 2
              Tags: ["X1J03"],
            },
            {
              Section: "Cement Mill", //line 1
              Tags: ["Z1A01_L1"],
            },
            {
              Section: "Cement Mill-2", //line 1
              Tags: ["U1T36_OPSP", "U1T36_S1", "U6U02_F1", "Z2L01_L4"],
            },
            {
              Section: "Cooler", //line 1
              Tags: ["U1L11_W1_TON", "U1L11_W1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
