import "./KilnFeedHirmiL1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  kilnFeedHirmiL1Nodes,
  kilnFeedHirmiL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnFeedHirmiL1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kilnFeedHirmiL1Nodes}
        nodeType={kilnFeedHirmiL1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Kiln", // 90 times
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "PreHeater", // 10 occurrences
              Tags: [
                "CS_HEAT_LOSS",
                "H1P11_P1",
                "H1P31_P1",
                "VITALPH_P1",
                "W1B04_P1",
                "W1B55_P2_2",
                "W1B55_T4",
                "CAL_CONVEY_P1",
                "J1P09AX2_NOx",
                "KFBE_AVG_KW",
                "W1B04_F1",
              ],
            },
            {
              Section: "Raw Mill-2", // 9 occurrences
              Tags: [
                "R2P74",
                "R2P75",
                "H1P14",
                "H1P34",
                "H1P15",
                "H1P35",
                "R2U04",
                "R2U06",
                "R2U05_P2",
              ],
            },
            {
              Section: "Cement Mill", // 3 occurrences
              Tags: [
                "CM_571BE1II_B",
                "CM_561FN2_PT1",
                "CM_K31BF5_PT1",
                "CM_K31BF5_DPT",
              ],
            },
            {
              Section: "Cooler", // 3 occurrences
              Tags: ["COOLER_VENT_LOSS", "W1A04_B04_TOTFEED"],
            },
            {
              Section: "Raw Mill", // 1 occurrence
              Tags: ["R1U05_P2"],
            },
            {
              Section: "Calciner", // 1 occurrence
              Tags: ["J1L01_L1"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
