import "./BagHouseHirmiL2Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  BagHouseHirmiL2Nodes,
  BagHouseHirmiL2NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const BagHouseHirmiL2Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={BagHouseHirmiL2Nodes}
        nodeType={BagHouseHirmiL2NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "PreHeater",
          section: "",
          line: "2",
          extraTagDetails: [
            {
              Section: "Kiln", // 13 occurrences from line=1
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
              Section: "Raw Mill-2", // 22 occurrences  line =1
              Tags: [
                "R1P55",
                "R2M01_T1",
                "R2M24",
                "RM2_GR_OIL_BATH_TEMP",
                "R2M05M10_IND",
                "R2M05M11_IND",
                "R2M05M12_IND",
                "RM2_GR_OIL_TANK_TEMP",
                "R2P74",
                "R2P75",
                "R2P71_JPF",
                "H1P14",
                "H1P34",
                "H1P15",
                "H1P35",
                "R2U22M1",
                "R2U22M3",
                "R2U22M4",
                "R2U23",
                "RM2_SAMPLE_TAKEN_COUNTER",
                "R2U21",
                "R2K02",
                "R2M01_X2",
                "R2M02_V_X2",
                "R2M02_V_X3",
                "R2M05_A_X1",
                "R2M05_V_X1",
                "R2S20_X1",
                "R2S20J1_PID_SPM",
                "R2S21_Z1",
                "R2T01_Y1_SPM",
                "R2T04_PID_SPM",
                "R2T04_Z1",
                "R2M03",
                "R2M03_I1",
                "R2M03_J1",
              ],
            },
            {
              Section: "Cement Mill", // 4 occurrences  line=1
              Tags: [
                "CM_571BE1II_B",
                "CM_561FN2_PT1",
                "CM_K31BF5_PT1",
                "CM_K31BF5_DPT",
              ],
            },
            {
              Section: "Cooler", // 1 occurrence  line=1
              Tags: ["COOLER_VENT_LOSS"],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
