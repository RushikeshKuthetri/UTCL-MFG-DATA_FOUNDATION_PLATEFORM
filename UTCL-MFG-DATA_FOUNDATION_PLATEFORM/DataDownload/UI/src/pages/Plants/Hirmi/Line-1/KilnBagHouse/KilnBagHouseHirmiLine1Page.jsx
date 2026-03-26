import "./KilnBagHouseHirmiLine1Page.scss";
import { ReactFlowProvider } from "reactflow";
import {
  kilnBagHouseHirmiLine1Nodes,
  kilnBagHouseHirmiLine1NodesType,
} from "../../../../../reactflow";
import { ReactFlowRenderer } from "../../../../../components/ReactFlowRenderer/ReactFlowRenderer";

export const KilnBagHouseHirmiLine1Page = () => {
  return (
    <ReactFlowProvider>
      <ReactFlowRenderer
        node={kilnBagHouseHirmiLine1Nodes}
        nodeType={kilnBagHouseHirmiLine1NodesType}
        plantDetails={{
          plantCode: "HCW",
          plantName: "Hirmi",
          sectionName: "PreHeater", // majority tags
          section: "",
          line: "1",
          extraTagDetails: [
            {
              Section: "Cement Mill",
              Tags: [
                "CM_571BE1II_B",
                "CM_561FN2_PT1",
                "CM_K31BF5_PT1",
                "CM_K31BF5_DPT",
              ],
            },
            { Section: "WHRS", Tags: ["WHRS_AQC_DMPR_003_OPSP"] },
            {
              Section: "Cooler",
              Tags: [
                "COOLER_VENT_LOSS",
                "WHRS_AQC_FLG_DMPR_002",
                "W13P21_Y1_SPA",
                "W1K01_P1",
                "W1K10_P1",
              ],
            },
            {
              Section: "Kiln", //second highest majority
              Tags: [
                "J1J01",
                "W1U13",
                "W1U14",
                "W1U11",
                "W1A65",
                "KILN_INLET_UT_PUMP_IND",
                "W1X38",
                "W1x37",
                "HTD_EXT_UP_EXTR_ALM",
                "HTD_SV_B_IND",
                "W1W08",
                "HTD_SV_A_IND",
                "W1W33M1",
                "W1W33M2",
                "HTD_EXT_DNALM01",
                "DP_CALULATED1_4",
                "DP_CALCULATED5_8",
                "SPARE_REAL",
                "J1BHCOMP2",
                "J1K14",
                "J1K24",
                "J1U27",
                "W1P81_P1",
                "W1P94",
                "W1B65",
                "BOOSTER_PUMP_FB",
                "BOOSTER_PUMP_P1",
                "EJ_LIVE_VALUE",
                "J1J03",
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
                "J1J02_Y1_OPSP",
              ],
            },
          ],
        }}
      />
    </ReactFlowProvider>
  );
};
