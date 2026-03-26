import "./RawMill1HirmiLine1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  RawMill1HirmiL1Nodes,
  RawMill1HirmiL1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const RawMill1HirmiLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={RawMill1HirmiL1Nodes}
        nodeType={RawMill1HirmiL1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "Raw Mill", //76 times
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Kiln", // 23 occurrences
              Tags: [
                "HTD_SV_A_IND",
                "W1W33M1",
                "W1W33M2",
                "HTD_EXT_DNALM01",
                "W1P94",
                "W1B65",
                "EJ_LIVE_VALUE",
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
                "KS_HEAT_LOSS",
                "W1P91_P1",
                "KILN_CONVEY_P1",
                "H1H01_L4",
              ],
            },
            {
              Section: "Raw Mill-2", // 12 occurrences
              Tags: [
                "RM2_GR_OIL_TANK_TEMP",
                "R2P74",
                "R2P75",
                "H1P14",
                "H1P34",
                "H1P15",
                "H1P35",
                "R2U22M1",
                "R2U22M3",
                "R2U22M4",
                "R2U22M1_I1",
                "R2U22M2_I1",
              ],
            },
            {
              Section: "PreHeater", // 6 occurrences
              Tags: [
                "CS_HEAT_LOSS",
                "W1B55_T4",
                "CAL_CONVEY_P1",
                "J1P11_T4_BH",
                "J1P11_T5_BH",
                "J1P09AX2_NOx",
              ],
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
              Section: "Cooler", // 1 occurrence
              Tags: ["COOLER_VENT_LOSS"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
