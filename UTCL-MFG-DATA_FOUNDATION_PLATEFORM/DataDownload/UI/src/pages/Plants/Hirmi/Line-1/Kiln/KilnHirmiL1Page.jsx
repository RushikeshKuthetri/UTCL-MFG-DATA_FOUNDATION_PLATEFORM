import "./KilnHirmiL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  kilnHirmiL1Nodes,
  kilnHirmiL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnHirmiL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kilnHirmiL1Nodes}
        nodeType={kilnHirmiL1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Kiln", //appeared max no. 126 of times
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "PreHeater", // 89 occurrences
              tags: [
                "CS_HEAT_LOSS",
                "W1A55_T3",
                "W1B04_P1",
                "W1B54_T4",
                "W1B55_P2_2",
                "W1B55_P3",
                "W1B55_P4",
                "W1B55_T1_1",
                "W1B55_T2",
                "W1B55_T3",
                "W1B55_T4",
                "W1B56_P2",
                "W1B56_P3",
                "W1B56_P4",
                "W1B56_T3",
                "W1B56_T4",
                "W1B56_T5",
                "CAL_CONVEY_P1",
                "K1J01_I1",
                "W1B55_T1",
                "J1COMP_P2",
                "J1J01_COUNT_STEP_ECS",
                "J1J02_Z1",
                "J1J03_CONT_STEP_ECS",
                "J1J03T7_1",
                "J1J03T7_2",
                "J1J03T7_3",
                "J1J03T7_4",
                "J1J03T7_5",
                "J1J03T8_1",
                "J1J03T8_2",
                "J1J03T9_1",
                "J1J03T9_2",
                "J1J04_Z1",
                "J1P09_COUNT_STEP_ECS",
                "J1P11_T4_BH",
                "J1P11_T5_BH",
                "J1P09AX2_NOx",
                "J1P09AX2_NOx_DG1",
                "KFBE_AVG_KW",
                "W1A51_P1",
                "W1A51_P2",
                "W1A51_T1",
                "W1A51_T2",
                "W1A52_P1",
                "W1A52_P2",
                "W1A52_T1",
                "W1A52_T2",
                "W1A53_P1",
                "W1A53_P2",
                "W1A53_T1",
                "W1A53_T2",
                "W1A54_P1",
                "W1A54_P2",
                "W1A54_P3",
                "W1A54_T1",
                "W1A54_T2",
                "W1A55_P1",
                "W1A55_P2",
                "W1A55_P3",
                "W1A55_T1",
                "W1A55_T2",
                "W1B04_F1",
                "W1B50_P1",
                "W1B50_T1",
                "W1B51_P1",
                "W1B51_P2",
                "W1B51_T1",
                "W1B51_T2",
                "W1B52_P1",
                "W1B52_P2",
                "W1B52_T1",
                "W1B52_T2",
                "W1B53_P1",
                "W1B53_P2",
                "W1B53_T1",
                "W1B53_T2",
                "W1B54_P1",
                "W1B54_P2",
                "W1B54_T1",
                "W1B54_T2",
                "W1B55_P1",
                "W1B55_P2",
                "W1B61_P1",
                "W1B61_P2",
                "W1B61_T1",
                "W1B61_T2",
                "W1PCOA2",
                "W1PCOA3",
                "J1P09_J1",
                "J1P09_S1",
                "J1P09_Y1_SPM",
                "W1B50_A1",
                "W1B50_A2",
                "W1B55_T1_SPM",
              ],
            },
            {
              Section: "Cooler", // 8 occurrences
              tags: [
                "COOLER_VENT_LOSS",
                "W1A04_B04_TOTFEED",
                "W1K01_T1",
                "W1KO1_T2",
                "WHRS_AQC_FLG_DMPR_002",
                "W13P21_Y1_SPA",
                "W1K01_P1",
                "W1K10_P1",
              ],
            },
            {
              Section: "Coal Mill", // 4 occurrences
              tags: ["K1L03_T9", "K1L03_W1", "K1L04_T9", "K1L05_T9"],
            },
            {
              Section: "WHRS", // 1 occurrence
              tags: ["WHRS_AQC_DMPR_003_OPSP"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
