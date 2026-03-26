import "./CoalMillHirmiL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  CoalMillHirmiL2Nodes,
  CoalMillHirmiL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const CoalMillHirmiL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={CoalMillHirmiL2Nodes}
        nodeType={CoalMillHirmiL2NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Coal Mill", //98 tags
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", // 9 occurrences
              Tags: [
                "KILN_TOT_FR",
                "PH_432DQ1_FR",
                "KL_CLINKER_PROD_TPD",
                "KL_472FM1",
                "KL_452BI1_WI",
                "KL_452BI2_WI",
                "KL_452DQ1",
                "KL_452DQ2",
                "KL_482BI1_WI",
                "KL_482DQ1",
              ],
            },
            {
              Section: "PreHeater", // 48 occurrences
              Tags: [
                "PH_392FNPII_B",
                "PH_392FNQII_B",
                "PH_392FNNII_B",
                "PH_412CG5_ZT",
                "PH_412CG4_ZT",
                "PH_412CG3_ZT",
                "PH_412CG2_ZT",
                "PH_412CG1_ZT",
                "PH_412CGA_ZT",
                "PH_412CG9_ZT",
                "PH_412CG8_ZT",
                "PH_412CG7_ZT",
                "PH_412CG6_ZT",
                "PH_392RA5II_B",
                "PH_392BL3II_B",
                "PH_412CGB",
                "PH_412CGB_ZT",
                "PH_392FNRII_B",
                "PH_392FNSII_B",
                "PH_432BE1_II_AVG",
                "PH_432BE1_CUR_DIFF",
                "PH_432FM1_DG_ZT",
                "PH_432DQ1_WI",
                "PH_432DQ1_DG_ZT",
                "PH_432DQ1_FR_TD_TOT",
                "PH_432FN3II_B",
                "PH_432DG1_ZT",
                "PH_432DG1",
                "PH_432DG2",
                "PH_392AE1_V06",
                "PH_392BL1_PT",
                "PH_392BL1_VFD_II",
                "PH_392BL2_PT",
                "PH_392BL2_VFD_II",
                "PH_392BL3_PT",
                "PH_392FNW_II",
                "PH_412BE1_M01II_B",
                "PH_412BF1_DPT",
                "PH_412BF1_PT",
                "PH_412FN3II_B1",
                "PH_412FN4II_B1",
                "PH_412FN5II_B1",
                "PH_412FN6II_B1",
                "PH_412FN8II_B1",
                "PH_412RA2II_B1",
                "PH_412SGB",
                "PH_412SGD",
                "PH_432BE1_M01",
                "PH_432BE1_M01II_B",
                "PH_432BE1_M02",
                "PH_432BE1_M02II_B",
                "PH_432BE1_M03",
                "PH_432BE1_M04",
                "PH_432BF2_DPT",
                "PH_432BF2_PT1",
                "PH_432BF2_PT2",
                "PH_432DG1_PT",
                "PH_432DQ1_SI",
                "PH_432FM1_FR",
                "PH_432FM1_PT",
                "PH_432FN4II_B1",
                "PH_432RA1II_B1",
                "PH_432RA2II_B1",
                "PH_432RA3_II",
                "PH_432RA3II_B",
                "PH_432SG3",
                "PH_432SG4",
                "PH_432SG4_SG5PT",
                "PH_432SG4_TT",
                "PH_432SG5",
                "PH_432SM1",
                "PH_442AM1_CO",
                "PH_442FN1_PT02",
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
