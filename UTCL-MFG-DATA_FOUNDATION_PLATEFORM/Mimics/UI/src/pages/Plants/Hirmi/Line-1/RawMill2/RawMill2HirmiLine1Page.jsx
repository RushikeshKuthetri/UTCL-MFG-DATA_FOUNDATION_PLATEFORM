import "./RawMill2HirmiLine1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  RawMill2HirmiL1Nodes,
  RawMill2HirmiL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill2HirmiLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill2HirmiL1Nodes}
        nodeType={RawMill2HirmiL1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Raw Mill-2", //52 times
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", // 23 occurrences
              Tags: [
                "K1V03",
                "K1V04",
                "CAL_AGITATOR_ON_FB",
                "CAL_MULTIKOR_ON_FB",
                "CAL_DOSING_SYS",
                "KILN_AGITATOR_ON_FB",
                "KILN_MULTIKOR_ON_FB",
                "KILN_DOSING_SYS",
                "K1V06",
                "K1J21",
                "K1J22NEW",
                "K1J25",
                "K1J24",
                "K1J23",
                "K1J30NEW",
                "K1J26",
                "K1J29",
                "K1J28",
                "K1J27",
                "CF_SILO_TON",
                "J1P09AX2_SOx",
                "KILN_CONVEY_P1",
                "H1H01_L4",
              ],
            },
            {
              Section: "Raw Mill", // 4 occurrences
              Tags: ["R1J03", "R1X04", "RECIPE_CV_SPM", "RM2_REJECT_TOTALIZER"],
            },
            {
              Section: "Cement Mill", // 4 occurrences
              Tags: [
                "CM_571BE1II_B",
                "CM_561FN2_PT1",
                "CM_K31BF5_PT1",
                "CM_K31BF5_DPT",
              ],
            },
            {
              Section: "PreHeater", // 5 occurrences
              Tags: [
                "CS_HEAT_LOSS",
                "CAL_CONVEY_P1",
                "J1P11_T4_BH",
                "J1P11_T5_BH",
                "J1P09AX2_NOx",
              ],
            },
            {
              Section: "Cooler", // 1 occurrence
              Tags: ["COOLER_VENT_LOSS"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
