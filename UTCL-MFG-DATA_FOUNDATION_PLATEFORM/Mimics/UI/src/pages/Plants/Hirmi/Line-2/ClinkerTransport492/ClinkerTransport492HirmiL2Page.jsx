import "./ClinkerTransport492HirmiL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  ClinkerTransport492HirmiL2Nodes,
  ClinkerTransport492HirmiL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const ClinkerTransport492HirmiL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={ClinkerTransport492HirmiL2Nodes}
        nodeType={ClinkerTransport492HirmiL2NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Preheater",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", // 3 occurrences
              Tags: ["KILN_TOT_FR", "PH_432DQ1_FR", "KL_CLINKER_PROD_TPD"],
            },
            {
              Section: "Clinker Transport", // 9 occurrences
              Tags: [
                "CL_492FN2_WTE2",
                "CL_492FN2_WTE3",
                "CL_492FN2_II",
                "CLDIAG_CL_492DB2",
                "CL_492SB1_S01",
                "CL_492BF3_TMR_REM",
                "CL_492CG1",
                "CLDIAG_CL_492FN3",
                "CL_492BS1",
              ],
            },
            {
              Section: "Cooler", // 23 occurrences
              Tags: [
                "CL_492DB2II_B",
                "CL_492DB1II_B",
                "CL_492DB1_TT1",
                "CL_472BF1",
                "CL_492BF1",
                "CL_492BF1_DPT",
                "CL_492BF1_PT1",
                "CL_492BF1_PT2",
                "CL_492BF1_PT3",
                "CL_492BF2",
                "CL_492BF2_DPT",
                "CL_492BF2_PT1",
                "CL_492BF2_PT2",
                "CL_492BF2_PT3",
                "CL_492BF2_PT4",
                "CL_492BF3_DPT",
                "CL_492BF3_PT",
                "CL_492DB2",
                "CL_492FN1",
                "CL_492FN2",
                "CL_492RA1",
                "CL_492RA2",
                "CL_492RA3",
                "CL_492SB1_LT1",
                "CL_492SG2",
                "CL_492SI1_LT1",
              ],
            },
            {
              Section: "Raw Mill-2", // 2 occurrences
              Tags: ["PH_392SB1_LT", "PH_392SB1_LVL"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
